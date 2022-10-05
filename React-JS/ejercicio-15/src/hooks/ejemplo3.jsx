/**
 * Ejemplo hooks: useState() & useContext()
 */

 import React, {useState, useContext} from 'react';

 /**
  * @returns Componente1
  * Dispone de un contexto que va a tener un valor que recibe desde el padre
  */
 
 const miContexto = React.createContext(null)
 
 const Componente1 = () => {
 
     // Inicializamos un estado vacío que va a rellenarse con los datos del contexto del padre
     const state = useContext(miContexto)
     return (
         <div>
             <h1>
                 El token es: {state.token}
             </h1>
             {/* Pintamos el componente2 */}
             <Componente2></Componente2>
         </div>
     );
 }
 
 const Componente2 = () => {
     const state = useContext(miContexto)
     
     return (
         <div>
             <h2>
                 La sesion es: {state.sesion}
             </h2>    
         </div>
     );
 }
 
 export default function MiComponenteConContexto() {
 
     const estadoInicial = {
         token: '1234567',
         sesion: 1
     }
 
     // Creamos el estado de este componente
     const [sessionData, setSessionData] = useState(estadoInicial)
 
     function actualizarSesion(){
         setSessionData(
             {
                 token:'fghjaskvn',
                 sesion: sessionData.sesion+1
             }
         )
     }
 
     return (
         <div>
             <miContexto.Provider value={sessionData}>
                 {/* lo que está aquí adentro puede leer los datos de sessionData. */}
                 {/* si se actualiza, también lo actualizan */}
                 <h1>Ejemplo de useState y useContext</h1>
                 <Componente1></Componente1>
                 <button onClick={actualizarSesion}>Actualizar sesión</button>
             </miContexto.Provider>
         </div>
     )
 }
 
 
 