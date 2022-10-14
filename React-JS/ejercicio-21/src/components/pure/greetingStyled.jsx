import React, {useState} from 'react';

//Definiendo estilos en constantes

// ? Estilo para usuario loggeado
const loggedStyle = {
    color:'white'
}

// ? Estilo para usuario no loggeado
const unloggedStyle = {
    color:'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    //Se genera un estado para el componente y así controlar el login del usuario
    const [logged, setLogged] = useState(false);

    // const greetingUser = () => (<p>Hola, {props.name}</p>)
    // const pleaseLogin = () => (<p>Please login</p>)

    return (
        <div style={logged ? loggedStyle : unloggedStyle}>
            { logged ? (<p>Hola, {props.name}</p>) : (<p>Please login</p>) }
            <button onClick={() => {
                console.log('Boton pulsado')
                setLogged(!logged)
            }}>
                {logged ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default GreetingStyled;
