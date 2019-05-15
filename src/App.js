import React from 'react';
import './App.css';
import TestComponent from './TestComponent'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
 
function App() {
  return (
    <div className="App">
      <Router>
        <h1>Press the button below to route</h1>
        <Link to="/testpage">Click me</Link>
        <Switch>
          <Route path="/testpage" component={TestComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
