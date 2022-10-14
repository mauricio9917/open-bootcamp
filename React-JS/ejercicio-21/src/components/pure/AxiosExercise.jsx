import React, {useState, useEffect} from 'react';
import getRandomJock from '../../services/axiosServiceNorris.js'

const Axiosexercise = () => {

    const [jock, setJock] = useState({});

    useEffect(() => {
        obtainJock()
     }, []);

    const obtainJock = () => {
        getRandomJock()
        .then((response) => {
            if (response.status === 200){
                setJock(response.data.value)
            }
        })
        .catch((error) => {
            alert('Something went error ',error)
        })
    }

    return (
        <div>
            <h1>Chuck Norris Example</h1>
            { jock != null ? 
                (
                    <div>
                        <img alt='avatar' src={jock.icon_url} /> 
                        <h3>{jock.id} {jock.url}</h3>
                        <h2>{jock.value}</h2>
                    </div>
                ) : 
                (
                    <div>
                        <button onClick={obtainJock}> Generate a new jock</button>
                    </div>
                )
                }
        </div>
    );
}

export default Axiosexercise;
