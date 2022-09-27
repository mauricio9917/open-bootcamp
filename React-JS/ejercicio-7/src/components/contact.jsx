import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Contact} from '../models/contact.class'

// se importa la hoja de estilos de css
// import '../../styles/contact.scss'


const ContactComponent = ({contact, connected, remove}) => {

    useEffect(() => {
        console.log('Created Task')
        return () => {
            console.log(`Task: ${contact.name} is going to unmount`)
        };
    }, [contact]);

    /**
     * Function that returns a badge depending on the level of the contact
     */

    /**
     * Function that returns icon depending on completation of the contact
     */
    function connectedIcon(){
        if(contact.connected){
            return (<i onClick={() => connected(contact)} className='bi-toggle-on contact-action' style={{color:'green'}}></i>)
        } else {
            return (<i onClick={() => connected(contact)} className='bi-toggle-off contact-action' style={{color:'gray'}}></i>)
        }
    }

    return (
        <tr className="fw-normal">
            <th>
                <span className="ms-2">{contact.name}</span>
            </th>
            <th>
                <span className="ms-2">{contact.last_name}</span>
            </th>
            <td className="align-middle">
                <span>{contact.email}</span>
            </td>
            <td className="align-middle">
                {connectedIcon()}
                <i className='bi-trash contact-action' style={{color:'tomato'}} onClick={() => remove(contact)}></i>
            </td>
        </tr>
        // <div>
        //     <h2 className='contact-name'>
        //         Nombre: {contact.name}
        //     </h2>
        //     <h3>
        //         Descripcion: {contact.description}
        //     </h3>
        //     <h4>
        //         Level: {contact.level}
        //     </h4>
        //     <h5>
        //         This class is: {contact.completed ? 'COMPLETED':'PENDING'}
        //     </h5>
        // </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    remove: PropTypes.func.isRequired
};


export default ContactComponent;
