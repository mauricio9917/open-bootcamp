import React, { useState } from 'react';
import ContactComponent from './contactComponent';
import ContactForm from './contactForm';

const Contact = ( ) => {
    const defaultContact = [
        { nombre: 'Jose', email: 'Fernandez', conectado: true },
        { nombre: 'Maria', email: 'Gómez', conectado: true },
        ];
    
      const [nuevoContacto, setNuevoContacto] = useState(defaultContact);
    
      function changeState(contacto) {
        const index = nuevoContacto.indexOf(contacto);   
        const tempContact = [...nuevoContacto];
    
        tempContact[index].estado = !tempContact[index].estado;
        setNuevoContacto(tempContact);
      }
    
      function remove(contacto) {
        const index = nuevoContacto.indexOf(contacto);
        const tempContact = [...nuevoContacto];
        tempContact.splice(index, 1);
        setNuevoContacto(tempContact);
      }
    
      function addContact(contacto) {
        const tempContact = [...nuevoContacto];
        tempContact.push(contacto);
        setNuevoContacto(tempContact);
      }
    
      return (
        <div className="Contacto">
          <h1>Contactos</h1>
    
          <div className="card-container">
            {nuevoContacto.map((contacto, index) => {
              return (
                <ContactComponent key={index} contacto={contacto} changeState={changeState} remove={remove} />
              );
            })}
          </div>
    
          <ContactForm onAddContact={addContact}></ContactForm>
        </div>
      );
    };
    


export default Contact;