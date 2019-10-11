  
import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div className="navbar navbar-expand-sm bg-info navbar-dark ">
      <div className="row">
        <div className="col-md-4">
          <h2><a href="." className="text-white nounderline" id="header-name"><p>Harry Potter</p>
            Clicky Game</a></h2>
        </div>
        <div className={"col-md-4 " + (props.gameStatus == "2" ? " text-danger" : (props.gameStatus == "1" ? " text-success" : " text-info"))}>
          <h3>{props.feedback}</h3>
        </div>
        <div className="col-md-4 text-muted">
          <h3>Score: {props.score} | Top Score: {props.topScore}</h3>
        </div>
      </div>
    </div>
);

export default Navbar;