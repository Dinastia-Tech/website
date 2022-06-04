import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import HomePage from "./pages/home";
import Page2 from './pages/page2';
import ShowCompanys from './pages/showCompanys';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='home' element={<HomePage />} />
        <Route path="page2" element={<Page2 />} />
        <Route path="empresas" element={<ShowCompanys />} />

        </Routes>
    </BrowserRouter>
  )
}

export default App;

