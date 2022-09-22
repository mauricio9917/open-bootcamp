import React, { useState } from 'react'
//import ‘../../styles/clock.scss’;

const Clock = () => {

    const[date, setDate] = useState(new Date(0))
    const[age, setAge] = useState(0)
    const name = 'Martin'
    const last_name = 'San José'

    const componentDidMount = setDate(() => {
        document.title = `${new Date()}`
    }, 1000)

    const componentWillUnmount = () => {
        document.title = 'Paused time'
        clearInterval(componentDidMount)
    }

    return (
        <div>
            <h2>
                Hora Actual:
                {date.toLocaleTimeString()}
            </h2>
            <h3>{name} {last_name}</h3>
            <h1>Edad: {age}</h1>
        </div>
    )
    
    function tick(){
        setAge(age+1)
        return {
            date: new Date(),
            age
        }
    }
}
