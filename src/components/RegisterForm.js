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

    fetch(`http://localhost:5000/renters`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(renter),
      headers: myHeaders
    })
    .catch(err => console.log(err));
  }

  handleSubmit = e => {
    e.preventDefault();
    let renter = {}
    renter.name = `${this.refs.newFName.value} ${this.refs.newLName.value}`;
    renter.email = this.refs.newEmail.value;
    renter.password = this.refs.newPassword.value;
    this.createNewRenter(renter);
  }

  componentDidMount(){
    fetch(`http://localhost:5000/renters`)
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
