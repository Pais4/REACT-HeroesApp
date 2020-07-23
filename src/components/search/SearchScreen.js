import React, { useMemo } from 'react'
import queryString from 'query-string';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

/* OCUPAMOS EL HISTORY PARA INTENTAR HACER UN PUSH */
export const SearchScreen = ({history}) => {

    /* UTILIZAMOS EL HOOK DE LOCATION PARA LEER EL PARAMETRO DE LA BUSQUEDA */
    const location = useLocation();
    // console.log(location.search);
    /* QUERYSTRING RETORNA UN OBJETO CON EL VALOR DEL PARAMETRO QUE ESTAMOS PASANDO YA PARSEADO */
    const { q = ''} = queryString.parse(location.search);
    
    /* USAMOS UN HOOK PERSONALIZADO */
    const [formValues, handleInputChange] = useForm({
        /* NAME DEL INPUT, LE ESTABLECEMOS COMO VALOR INICIAL EL DEL QUERYSELECTOR */
        searchHero: q
    });
    
    const { searchHero } = formValues;

    // const heroesFiltered = getHeroesByName(searchHero); Este busca mientras se copia
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    /* TENEMOS QUE RECIBIR EL EVENTO PARA HACER EL PREVENTDEFAULT */
    const handleSearch = (e) => {
        e.preventDefault();
        /* AÑADIMOS EL PUSH PARA INTENTAR HACER UN QUERY STRING */
        history.push(`?q=${searchHero}`);
    }

    return (
        <div>
            <h1> Search Screen </h1>
            <hr/>

            <div className="row">

                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            placeholder="Find your Hero"
                            className="form-control"
                            name="searchHero"
                            autoComplete="off"
                            value={searchHero}
                            onChange={ handleInputChange }
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4> Results </h4>
                    <hr/>

                    { /* USAREMOS UNA EXPRESION */}
                    {
                        (q === '') 
                        && 
                        <div className="alert alert-info">
                            Search a Hero
                        </div>
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0) 
                        && 
                        <div className="alert alert-danger animate__animated animate__fadeIn">
                            There's no hero with {q}
                        </div>
                    }

                    {
                        heroesFiltered.map( hero => (
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}
