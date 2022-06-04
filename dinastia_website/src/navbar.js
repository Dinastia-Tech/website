import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{top:0, }}>
        <div style={{ display: 'flex',justifyContent: 'start', flexDirection: 'row'}}>
          <div style={{marginLeft: '5vw'}}>
            <Link to="/">Home</Link>
          </div>
          <div style={{marginLeft: '5vw'}}>
            <Link to="/page2">Page2</Link>
          </div>
          <div style={{marginLeft: '5vw'}}>
          <Link to="/empresas">Veja as empresas distribuidoras</Link>
        </div>
        </div>
    </div>
  );
}

export default Navbar;