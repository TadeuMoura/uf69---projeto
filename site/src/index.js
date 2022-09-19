import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from './pages/home';
import Evento from './pages/evento';
import Sobre from './pages/sobre';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/evento' element={<Evento/>} />
        <Route path='/sobre-nos' element={<Sobre/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


