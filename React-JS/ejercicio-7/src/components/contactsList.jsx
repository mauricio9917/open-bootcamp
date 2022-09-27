import React, { useState, useEffect } from 'react';
import {Contact} from '../models/contact.class'
import ContactComponent from './contact'
// import Taskform from '../pure/forms/taskForm'

//Se importa el estilo de scss
// import '../../styles/contact.scss'

const ContactListComponent = () => {

    const defaultContact = new Contact('Mauricio', 'Ardila', 'yojardila99@outlook.com', true)

    //Estado del componente
    const [contacts, setContacts] = useState(defaultContact);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        console.log('Contacts State has been modified')
        setLoading(false)
        return () => {
            console.log('List component is going to unmount')
        };
    }, [contacts]);

    function showContact(contact){
        console.log('Showing this contact', contact)
        const index = contacts.indexOf(contact)
        const tempContacts = [...contacts]
        tempContacts[index].completed = !tempContacts[index].completed
        // we update the state of the component and it will update the iteration of the contacts in order to show the contacts updated.
        setContacts(tempContacts)
    }
    
    function addContact(contact){
        console.log('Delete this contact', contact)
        const index = contacts.indexOf(contact)
        const tempContacts = [...contacts]
        tempContacts.push(contact)
        setContacts(tempContacts)
    }

    function removeContact(contact){
        console.log('Delete this contact', contact)   
        const index = contacts.indexOf(contact)
        const tempContacts = [...contacts]
        tempContacts.splice(index,1)
        setContacts(tempContacts)
    }


    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Your contacts:</h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height:'400px'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='row'>Name</th>
                                    <th scope='row'>Last Name</th>
                                    <th scope='row'>Email</th>
                                    <th scope='row'>Conected?</th>
                                </tr>
                            </thead>
                            <tbody>
                                { contacts.map((contact, index) => {
                                    return (
                                    <ContactComponent key={index} contact={contact} connected={showContact} remove={removeContact}></ContactComponent>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
            {/* TODO: Aplicar un for/map para renderizar una lista */}
            {/* <TaskComponent contact={defaultTask}></TaskComponent> */}
            {/* <Taskform add={addContact}></Taskform> */}
        </div>
    );
};

export default ContactListComponent;
