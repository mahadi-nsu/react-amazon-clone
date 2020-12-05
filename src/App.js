import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path = '/checkout'>
            <h1>checkout</h1>
          </Route>
          <Route path = '/login'>
            <h1>login</h1>
          </Route>
          <Route path = '/'>
            <Header></Header>
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
