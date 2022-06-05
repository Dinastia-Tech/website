import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ top: 0, position: 'fixed', marginBottom: '5vh', 
    // backgroundImage: "linearGradient('white', 'black')" 
  }}>
      <div style={{ display: 'flex', justifyContent: 'start', flexDirection: 'row' }}>
        <div style={{ marginLeft: '5vw' }}>
          <Link to="/">Home</Link>
        </div>
        <div style={{ marginLeft: '5vw' }}>
          <Link to="/calculadora">Calculadora</Link>
        </div>
        <div style={{ marginLeft: '5vw' }}>
          <Link to="/tokenizacao">Tokenização</Link>
        </div>
        <div style={{ marginLeft: '5vw' }}>
          <Link to="/negociacao">Negociação</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;