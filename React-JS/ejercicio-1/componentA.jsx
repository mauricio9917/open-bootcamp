import React, { Component } from 'react'
import PropTypes from 'prop-types'


class ComponentA extends Component {

    constructor(props) {
        super (props)
        this.state = {
            name: "Mauricio",
            last_name: "Ardila",
            email: "yojardila1999@gmail.com",
            connected: true
        }
    }

    render() {
        return (
            <div>
                <h1>Hola {this.props.name} {this.props.last_name}</h1>
                <h1>Tu email es: {this.props.email}</h1>
                <h1>Estado: {this.props.connected}</h1>
            </div>
        );
    }
}


ComponentA.propTypes = {
    name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    connected: PropTypes.bool
};


export default ComponentA;
