import React, { Component } from "react";
import { Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./screens/Home.jsx";
import Stuff from "./screens/Stuff.jsx";
import Contact from "./screens/Contact.jsx";
import Game from "./tictactoe/Game"

function App() {

  return (
    //router..
  <HashRouter>
      <div>
      <h1>Simple Fast SPA</h1>
        <ul className="header">
        <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/stuff">Stuff</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/tictactoe">tic tac toe</NavLink></li>
        </ul>
        <div className="content">
          <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/tictactoe" component={Game}/>
        </div>
    </div>
  </HashRouter>
  );
}

export default App;
