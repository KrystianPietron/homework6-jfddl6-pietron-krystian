import React, { Component } from 'react';
import Navigation from './navigation'
import ToDo from './ToDo'
import Auth from './Auth'
import Register from './Register'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Auth />
        <Register />
        <ToDo />
      </div>
    );
  }
}

export default App;
