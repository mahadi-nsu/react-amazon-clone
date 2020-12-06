import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/home/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path = '/checkout'>
          <Header></Header>
            <h1>checkout</h1>
          </Route>
          <Route path = '/login'>
            <h1>login</h1>
          </Route>
          <Route path = '/'>
            <Header></Header>
            <Home />
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
