/**
 * Ejemplo de componente de tipo clase que dispone de los metodos del ciclo de vida
 */

 import React, { Component } from 'react';
 import PropTypes from 'propTypes';
 
 class LifeCycleExample extends Component {
     constructor(props) {
         super(props)
         console.log('CONSTRUCTOR: Cuando se instancia el componente')
     }
 
     componentWillMount() {
         console.log('WILLMOUNT: Antes del montaje del componente')
     }
 
     componentDidMount() {
         console.log('DIDMOUNT: Justo en el montaje del componente, antes de renderizar')
     }
 
     componentWillReceiveProps(nextProps) {
         console.log('WillReceiveProps: Si va a recibir nuevas props ')
     }
 
     shouldComponentUpdate(nextProps, nextState) {
         // controlar si el componente puede o no actualizarse
         // return true/false
     }
 
     componentWillUdpate(nextProps, nextState) {
         console.log('WillUdpate: Justo antes de actualizarse ')
     }
 
     componentDidUpdate(prevProps, prevState) {
         console.log('DidUpdate: Justo después de actualizarse ')
     }
 
     componentWillUnmount() {
         console.log('WillUnmount: Justo antes de desaparecer ')
 
     }
 
     render() {
         return (
             <div>
 
             </div>
         )
         
     }
 };
 
 
 export default LifeCycleExample;
 