import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ViewGrill from './components/ViewGrill.js';

const grill = {
  brand: 'Weber',
  name: 'The 44',
  series: 'Ranch Kettle',
  fuel: 'Charcoal',
  size: 'Large',
  price: 7.99
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <ViewGrill grill={ grill } />
      </div>
    );
  }
}

export default App;
