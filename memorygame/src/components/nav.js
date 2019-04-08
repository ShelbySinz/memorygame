import React from "react";


function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <span className="navbar-brand mb-0 h1">Memory Game</span>
    <span className="text-center mb-0 h5 text-success">{props.message}</span>
    <span className="navbar-text text-dark font-weight-bold ">
    
      Score: <span>{props.correct}</span>&nbsp;
      Top Score: <span>{props.topscore}</span>
    </span>
      
    </nav>
  );
}

export default Navbar;