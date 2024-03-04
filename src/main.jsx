import React from 'react'
import ReactDOM from 'react-dom/client';
import { CargarApi } from './components/CargarApi';
import './style.css';
import {CargarPeliculas} from './components/CargarPeliculas';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CargarPeliculas  />
  </React.StrictMode>,
)
