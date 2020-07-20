import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Wrapper from "./components/Wrapper";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>

      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />  
          <Route exact path="/about" component={About} />
          <Route exact path="/project" component={Project} />  

        </Wrapper>

      </div>
    </Router>
  );
}


export default App;
