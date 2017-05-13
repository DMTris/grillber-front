//not in use at the moment

import React, {Component} from 'react';


export default class GrillSearch extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  changeGrillBySize(size){
    this.setState({grill: size})
  }

  getAllGrills(){
    fetch(`https://fathomless-ravine-83804.herokuapp.com/grills`, {method: 'GET', mode: 'cors'})
    .then(response => response.json())
    .then(grills => {
      this.setState({grills});
    })
    .catch(err => console.log(err));
  }

  componentDidMount(){
    this.getAllGrills()
  }

  render(){
    return(
      <div>
        <h2>Grillber Search</h2>
        <form className="grillSearchForm">
          <fieldset>
            <legend>Search by size</legend>
            <input type="checkbox" id="small" name="bySize" value="Small" />
              <label htmlFor="small">Small</label>
            <input type="checkbox" id="medium" name="bySize" value="Medium" />
              <label htmlFor="medium">Medium</label>
            <input type="checkbox" id="large" name="bySize" value="Large" />
              <label htmlFor="large">Large</label>
          </fieldset>
          <fieldset>
            <legend>Search by fuel type</legend>
            <input type="checkbox" id="charcoal" name="byFuel" value="Charcoal" />
              <label htmlFor="charcoal">Charcoal</label>
            <input type="checkbox" id="gas" name="byFuel" value="Gas" />
              <label htmlFor="gas">Gas</label>
          </fieldset>
          <button type="submit" id="search">Search</button>
        </form>
        <div className="viewGrill">
        //insert ViewGrill component here
        </div>
      </div>
    )
  }
}
