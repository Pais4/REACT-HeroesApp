import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({history}) => {

    // const params = useParams();
    /* EXTRAEMOS CON ESTE HOOK LA INFORMACION DE LOS PARAMS QUE VIENE POR LA URL */
    /* LO PODEMOS DESESTRUCTURAR */
    const {heroeId} = useParams();

    /* AQUI TAMBIEN USAREMOS USEMEMO */
    const hero = useMemo(() => getHeroById(heroeId), [heroeId])
    // const hero = getHeroById(heroeId);

    /* ESTO LO HACEMOS POR SI LA PERSONA MANDA UN PARAMETRO INCORRECTO EN LA URL */
    if(!hero){
        return <Redirect to="/" />
    }

    /* MANEJAMOS EL EVENTO DEL CLICK */
    const handleReturn = () => {
        /* SI POR EJEMPLO ENTRA DESDE MODO INCOGNITO O ALGO NO TENDRIA COMO IR ATRAS */
        if(history.length <= 2) {
            history.push('/');
        } else {
            history.goBack();
        }
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src = {`../assets/heroes/${ heroeId }.jpg`}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                    alt={superhero}
                />
            </div>

            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Altero ego: </b> {alter_ego} </li>
                    <li className="list-group-item"><b>Publisher: </b> {publisher} </li>
                    <li className="list-group-item"><b>First Appeareance: </b> {first_appearance} </li>
                </ul>

                <h5> Characters </h5>
                <p> {characters}</p>

                <button 
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                    >
                    Return
                </button>
            </div>

        </div>
    )
}
