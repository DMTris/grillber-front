import React, {Component} from 'react';

export default class Calendar extends Component {

  constructor(props){
    super(props);
    this.state = null;
  }

  getCalendar(){
    fetch(`https://fathomless-ravine-83804.herokuapp.com/calendar`, {method: 'GET', mode: 'cors'})
    .then(response => response.json())
    .then(calendar => {
      this.setState({calendar});
    })
    .catch(err => console.log(err));
  }

  componentDidMount(){
    this.getCalendar()
  }

  render(){
    return(
      <div>
        <p>Something goes here...</p>
      </div>
    );
  }
}
