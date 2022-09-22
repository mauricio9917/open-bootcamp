import React, { useState, useEffect } from 'react'
//import ‘../../styles/clock.scss’;

const Clock = () => {

    const initialState = {
        date: new Date(),
        age: 0,
        name: 'Mauricio',
        last_name: 'Ardila'
    }

    const [user, setUser] = useState(initialState)

    useEffect(() => {
        const intervalAge = setInterval(() => {
            actualiceUser()
        }, 1000)
        return () => {
            clearInterval(intervalAge)
        };
    })

    const actualiceUser = () => {
        return setUser({
            date: user.date,
            age: user.age +1,
            name: user.name,
            last_name: user.last_name,
        })
    }

    // const[date, setDate] = useState(new Date(0))
    // const[age, setAge] = useState(0)
    // const name = 'Martin'
    // const last_name = 'San José'

    // const componentDidMount = setDate(() => {
    //     document.title = `${new Date()}`
    // }, 1000)

    // const componentWillUnmount = () => {
    //     document.title = 'Paused time'
    //     clearInterval(componentDidMount)
    // }

    return (
        <div>
            <h2>
                Hora Actual:
                {user.date.toLocaleTimeString()}
            </h2>
            <h3>{user.name} {user.last_name}</h3>
            <h1>Edad: {user.age}</h1>
        </div>
    )
    
    // function tick(){
    //     setAge(age+1)
    //     return {
    //         date: new Date(),
    //         age
    //     }
    // }
}

export default Clock
