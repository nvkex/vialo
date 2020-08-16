import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import SignUp from './components/SignUp/SignUp';
import './App.css';


function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/register" exact component={SignUp} />
        <Route path="/" exact component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
