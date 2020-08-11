import React, { Component } from 'react';

import NavBar from '../NavBar/NavBar';

class HomePage extends Component {
  render() {
    return (
      <div>
          <NavBar />
        <h1 className = "display-4">Welcome to Vialo</h1>
      </div>
    )
  }
}

export default HomePage;
