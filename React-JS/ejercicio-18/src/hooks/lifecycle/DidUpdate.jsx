/**
 * Ejemplo de uso de metodo componentDidUdpate en componente de clase y uso de hook en componente
 * funcional
 */

 import React, { Component, useEffect } from 'react'

 export class DidUpdate extends Component {
 
     componentDidUpdate(){
         console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado')
     }
     render() {
         return (
             <div>
                 <h1>DidUpdate</h1>
             </div>
         )
     }
 }
 
 export const DidUpdateHook = () => {
 
     useEffect(() => {
         console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado')
     })
     
     return (
         <div>
             <h1>DidUpdate</h1>
         </div>
     );
 }
 
 