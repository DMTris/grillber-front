import React, { Component } from 'react';

export default class ViewGrill extends Component {
  constructor(props){
    super(props);
    this.state = { ...props.grill }
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
