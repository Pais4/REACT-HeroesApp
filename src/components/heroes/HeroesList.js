import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroesList = ({publisher}) => {

    // const heroes = getHeroesByPublisher(publisher);
    /* USAMOS USEMEMO PARA NO OBTENER LOS HEROES CADA QUE USAMOS EL COMPONENTE, SOLO SE 
    DEBERIA LLAMAR SI EL COMPONENTE CAMBIARA, PERO SI EL PROCESO ES PESADO ES MEJOR NO 
    TENER QUE GENERAR LOS VALORES DE NUEVO */
    /* [publisher] -> SE DEBERIA VOLVER A DISPARAR SI EL PUBLISHER LLEGA A CAMBIAR */
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map( hero => (
                    <HeroCard 
                        key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>
    )
}

/* ANOTACIONES */
/*
 * Publisher -> Es el prop que espera el selector
 * Usamos la expresion de JavaScript -> Map
 * ... -> Operador spread, extrae cada una de las propiedades y se las mandamos por props al hero
 */