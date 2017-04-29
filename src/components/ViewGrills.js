import React, { Component } from 'react';

import { backPort } from '../App.js';

export default class ViewGrill extends Component {
  constructor(props){
    super(props);
    this.state = { grills: {} };
  }

getGrills(){
  fetch(`http://localhost:${backPort}/grills`, { method: 'GET', mode: 'cors' })
  .then(response => response.json())
  .then(grills => {
    this.setState({ grills });
  })
  .catch(err => console.err(err));
  }
}


componentDidMount(){
  this.getGrills(grills);
}

  render() {
    return (
      <div>
        <h2 className="grillCatalog" >Grill Catalog</h2>
        <h3>{this.state.brand}</h3>
        <ul>
          <li>Name: {this.state.name}</li>
          <li>Series: {this.state.series}</li>
          <li>Fuel: {this.state.fuel}</li>
          <li>Size: {this.state.size}</li>
          <li>Price: {this.state.price}</li>
        </ul>
      </div>
    );
  }
}
