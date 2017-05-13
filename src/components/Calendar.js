import React, {Component} from 'react';

import ViewAppointment from './ViewAppointment';

export default class Calendar extends Component {

  constructor(props){
    super(props);

    this.state = {
      calendar: [],
      editState: true
    };
  }

  componentDidMount(){
    fetch(`https://fathomless-ravine-83804.herokuapp.com/calendar`, {method: 'GET', mode: 'cors'})
    .then(response => response.json())
    .then(calendar => {
      this.setState({calendar});
    })
    .catch(err => console.log(err));
  }

  render(){
    return(
      <div>
        <h2>Calendar</h2>
          {this.state.calendar.map(appointment => ViewAppointment(appointment))}
      </div>
    );
  }
}
