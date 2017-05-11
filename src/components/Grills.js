import React, {Component} from 'react';

import ViewGrill from './ViewGrill';

export default class Grills extends Component {

  constructor(props){
    super(props);
    this.state = { grills: [] };
  }

  componentDidMount(){
    fetch(`http://localhost:5000/grills`, {method: 'GET', mode: 'cors'})
      .then(response => response.json())
      .then(grills => {
        this.setState({grills});
      })
      .catch(err => console.log(err));
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
