import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ComponentA from './componentA'


class ComponentB extends Component {

    constructor(props) {
        super(props)
        this.state = {
            contact: ComponentA.this.props.contact
        }
    }

    render() {
        return (
            const isContact = this.state.contact
            if (isContact) {
                <h1>Contacto en linea</h1>
            } else {
                <h1>Contacto no disponible</h1>
            }
        )
    }
}


ComponentB.propTypes = {
    connected: PropTypes.bool
}

export default ComponentB
