import React, { useState } from "react";

import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Acceuil from "./components/Acceuil";
import Films from "./components/Film";

function App() {
  return (
    <div className="container">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/Acceuil" exact component={Acceuil} />
          <Route path="/Films" exact component={Films} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
