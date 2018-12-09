import React, { Component } from 'react';
import Navigation from './navigation'
import ToDo from './ToDo'
import Auth from './Auth'
import Search from './Search'
import FilterTask from './Filters'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Auth>
          <Navigation />
          <FilterTask />
          <Search />
          <ToDo />
        </Auth>
      </div>
    );
  }
}

export default App;
