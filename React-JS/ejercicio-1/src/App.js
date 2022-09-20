import logo from './logo.svg';
import './App.css';
import ComponenteA from './components/componentA';

function App() {
  const contactoPrueba = {
    nombre: 'Mauricio',
    apellido: 'de Ardila',
    email: 'mauro.ardi@open-bootcamp.com',
    conectado: false,
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteA contacto={contactoPrueba} />
      </header>
    </div>
  );
}

export default App;