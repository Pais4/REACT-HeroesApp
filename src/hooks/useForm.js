/* ESTO ES UN CUSTOM HOOK QUE CREAMOS PARA EL MANEJO DEL FORMULARIO */

import { useState } from 'react';

/* EL ESTADO INICIAL DEL USESTATE SERA  UN OBJETO VACIO */
export const useForm = ( initialState = {} ) => {

    const [formValues, setFormValues] = useState(initialState)

    const reset = () => {
        setFormValues( initialState );
    }

    const handleInputChange = ({target}) => {

        setFormValues({
            ...formValues,
            [target.name] : target.value
        });
    }

    return [formValues, handleInputChange, reset];
}

