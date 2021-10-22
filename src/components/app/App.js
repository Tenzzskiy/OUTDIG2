import React from "react";
import './App.css';
import {StartScreen} from "../start__screen/start_screen";
import {BrowserRouter, NavLink,Route} from "react-router-dom";
import {PopApp} from "../pop_app/pop_app";

function App() {
  return (
      <BrowserRouter>
    <div className="App">

        <Route exact path='/' render={ () =>  <StartScreen />}/>
        <Route path='/PopApp' render={ () =>  <PopApp />}/>

    </div>
      </BrowserRouter>
  );
}

export default App;
