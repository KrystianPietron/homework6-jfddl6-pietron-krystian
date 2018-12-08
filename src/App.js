import React, { Component } from 'react';
import Navigation from './navigation'
import ToDo from './ToDo'
import Auth from './Auth'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Auth>
          <Navigation />
          <ToDo />
        </Auth>
      </div>
    );
  }
}

export default App;
