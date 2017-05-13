import React, {Component} from 'react';

export default class RegisterForm extends Component {


  constructor(props){
    super(props);
    this.state = { renters: [] };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  createNewRenter = renter => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    fetch(`https://fathomless-ravine-83804.herokuapp.com/renters`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(renter),
      headers: myHeaders
    })
    .catch(err => console.log(err));
  }

  handleSubmit = e => {
    e.preventDefault();
    let renter = {};
    renter.name = `${this.refs.newFName.value} ${this.refs.newLName.value}`;
    renter.email = this.refs.newEmail.value;
    renter.password = this.refs.newPassword.value;
    this.createNewRenter(renter);
    this.props.history.push('/');
  }

  componentDidMount(){
    fetch(`https://fathomless-ravine-83804.herokuapp.com/renters`)
    .then(res => res.json())
    .then(renters => this.setState({renters}))
    .catch(console.error);
  }

  render(){
    return(
      <form method="post" onSubmit={this.handleSubmit} className="registerForm">
        <label htmlFor="fName">First Name: </label>
          <input type="text" id="fName" placeholder="Enter your first name here" ref="newFName" />
        <label htmlFor="lName">Last Name: </label>
          <input type="text" id="lName" placeholder="Enter your last name here" ref="newLName" />
        <label htmlFor="email">Email: </label>
          <input type="email" id="email" placeholder="Email" ref="newEmail" />
        <label htmlFor="password">Password: </label>
          <input type="password" id="password" placeholder="Enter a password here" ref="newPassword" />
        <button type="submit" value="submit">Submit</button><button type="reset" value="reset">Reset</button>
      </form>
    );
  }
}

/**
**@TODO Do I need to setState with the collection here? As in do I need to fetch the collection of renters to create a new one?
**@TODO Needs a redirect after using the Submit button
**/
