import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Calculadora from './pages/calculadora_co2';
import HomePage from "./pages/home";
import Negocicacao from './pages/negociacao';
import Tokenizacao from './pages/tokenizacao';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div style={{marginTop: '5vh'}}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="tokenizacao" element={<Tokenizacao />} />
          <Route path="negociacao" element={<Negocicacao />} />
          <Route path="calculadora" element={<Calculadora />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;

