import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
// import AppRoutingOne from './AppRoutingOne';
import AppRoutingTask from './AppRoutingTask'

// Añadimos Bootstrap a nuestro proyecto
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// ! Importante: los estilos propios, deben ir debajo del bootstrap para que no los pise.
import './index.css';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppRoutingTask />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

