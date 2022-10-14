import React, {useState, useEffect} from 'react';
import getRandomUser from '../../services/axiosService.js'

const Axiosexample = () => {

    const [user, setUser] = useState({});

    // useEffect(() => {
    //     obtainUser()
    // }, []);

    const obtainUser = () => {
        getRandomUser()
        .then((response) => {
            if (response.status === 200){
                setUser(response.data.results)
            }
        })
        .catch((error) => {
            alert('Something went error ',error)
        })
    }

    return (
        <div>
            <h1>Axios example</h1>
            { user != null ? 
                (
                    <div>
                        {/* <img alt='avatar' src={user.picture.large} /> */}
                        <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
                        <h3>{user.name.email}</h3>
                    </div>
                ) : 
                (
                    <div>
                        <p> Generate a new user</p>
                        <button onClick={obtainUser}>Random User</button>
                    </div>
                )
                }
        </div>
    );
}

export default Axiosexample;
