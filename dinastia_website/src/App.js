import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import HomePage from "./pages/home";
import Page2 from './pages/page2';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='home' element={<HomePage />} />
        <Route path="page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

