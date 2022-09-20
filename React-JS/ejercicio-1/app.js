import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
// import Greetingf from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list'
import ComponentA from './components/pure/componentA'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx*/}
        {/* <Greeting name="Mauricio"></Greeting> */}
        {/* <Greetingf name="Mauricio"></Greetingf> */}
        {/* Componente de listado de tareas */}
        <TaskListComponent></TaskListComponent>
        <ComponentA></ComponentA>
      </header>
    </div>
  );
}

export default App;
