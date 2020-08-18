import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import './App.css';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/" exact component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
