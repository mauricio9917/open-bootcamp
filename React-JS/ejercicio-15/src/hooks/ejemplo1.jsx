// Ejemplo de uso del hook useState

// Crear un componente de tipo funcion y acceder a su estado privado a traves de un hook y 
// ademas poder modificarlo

import React, { useState } from 'react';

const Ejemplo1 = () => {

    // valor inicial para un contador
    const valorInicial = 0

    // valor inicial para una persona
    const personaInicial = {
        nombre: 'Mauricio',
        email: 'mauro.ardi@open-bootcamp.com'
    }

    //Se desea que el valor inicial y la persona inicial sean parte del estado del componente
    // para así poder gestionarlo y que se vea reflejado en la vista del componente

    // const [nombreVariable, funcionparacambiar] =useState (valor inicial)

    const [contador, setContador] = useState(valorInicial)
    const [persona, setPersona] = useState(personaInicial)

    // Funcion para actualizar el estado privado que contiene el contador
    function incrementarContador(){
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador+1)
    }

    /**
     * Funcion para actualizar el estado persona en el componente
     */

    function actualizarPersona(){
        setPersona(
            {
                nombre: 'Pepe',
                email: 'pepe6789@open-bootcamp.com'
            }
        )
    }

    return (
        <div>
            <h1>Ejemplo de useState</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>DATOS PERSONALES: </h2>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h3>EMAIL: {persona.email}</h3>
            {/* Bloque de botones para actualizar el estado */}
            <button onClick={incrementarContador}>Incrementar Contador</button>
            <button onClick={actualizarPersona}>Actualizar Persona</button>
        </div>
    );
}

export default Ejemplo1;
