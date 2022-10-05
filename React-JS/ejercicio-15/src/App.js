// import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
// import Greetingf from './components/pure/greetingF';
// import TaskListComponent from './components/container/task_list'
// import ComponentA from './components/pure/componentA'
// import Ejemplo1 from './hooks/ejemplo1.jsx'
// import Ejemplo2 from './hooks/ejemplo2.jsx'
// import MiComponenteConContexto from './hooks/ejemplo3.jsx'
// import Ejemplo4 from './hooks/ejemplo4.jsx'
// import GreetingStyled from './components/pure/greetingStyled.jsx'
// import {Father} from './components/container/father.jsx'
// import OptionalRender from './components/pure/optionalRender.jsx'
// import LoginFormik from './components/pure/forms/loginFormik.jsx'
// import RegisterFormik from './components/pure/forms/registerFormik.jsx'
import TaskFormik from './components/pure/forms/taskFormik.jsx'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* Componente propio Greeting.jsx*/}
        {/* <Greeting name="Mauricio"></Greeting> */}
        {/* <Greetingf name="Mauricio"></Greetingf> */}
        {/* Componente de listado de tareas */}
        {/* Ejemplos de uso de hooks */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* Todo lo que hay aquí es tratado como props.children */}
        {/* <Ejemplo4 nombre="Mauricio">
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4>  */}
        {/* <GreetingStyled name='Mauricio'></GreetingStyled> */}
      {/* </header> */}
      {/* Gestión de eventos */}
      {/* <Father></Father> */}
      {/* Ejemplos de renderizado condicional */}
      {/* <OptionalRender></OptionalRender> */}
      {/* PROYECTO FINAL */}
      {/* <TaskListComponent></TaskListComponent> */}
      {/* <LoginFormik></LoginFormik> */}
      {/* <RegisterFormik></RegisterFormik> */}
      <TaskFormik></TaskFormik>
    </div>
  );
}

export default App;
