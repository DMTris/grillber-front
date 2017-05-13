import React, {Component} from 'react';

import ViewGrill from './ViewGrill';

export default class Grills extends Component {

  constructor(props){
    super(props);
    this.state = { grills: [] };
  }

  componentDidMount(){
    fetch(`https://fathomless-ravine-83804.herokuapp.com/grills`, {method: 'GET', mode: 'cors'})
      .then(response => response.json())
      .then(grills => {
        this.setState({grills});
      })
      .catch(console.error);
  }

  render(){
    return(
      <div>
        <h2>Grills</h2>
          {this.state.grills.map(grill => ViewGrill(grill))}
      </div>
    );
  }

}
/**
**@TODO need to add a key to the map function on 25.
**/
