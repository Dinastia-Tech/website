import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{
      top: 0, position: 'fixed', marginBottom: '5vh', width: '100%', zIndex: 10,
      backgroundImage: "linear-gradient(to left, #2E8B57, whitesmoke)"
      // background: "linearGradient('white', 'black')" 
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