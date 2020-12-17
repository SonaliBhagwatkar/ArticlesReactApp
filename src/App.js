//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
//import Header from '../src/common/header/Header';
import Details from '../src/screens/details/Details';
import Home from "../src/screens/home/Home";
import {Redirect, Route, Switch} from 'react-router-dom';


class App extends Component {

  backToHomeHandler =()=> {
    <Redirect to="/"/>
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">      
      <Switch>
        <Route path="/" exact render={(props)=> <Home {...props} />}/>
        <Route path="/details" exact render={(props)=> <Details {...props} backToHome={this.backToHomeHandler} />}/>       
      </Switch>
      </header>
    </div>
  );
}
}

export default App;
