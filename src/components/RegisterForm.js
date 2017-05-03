import React, {Component} from 'react';

export default class RegisterForm extends Component {

  render(){
    return(
      <form className="registerForm">
        <label htmlFor="fName">First Name: </label>
          <input type="text" id="fName" placeholder="Enter your first name here" />
        <label htmlFor="lName">Last Name: </label>
          <input type="text" id="lName" placeholder="Enter your last name here" />
        <label htmlFor="email">Email: </label>
          <input type="email" id="email" placeholder="Email" />
        <label htmlFor="password">Password: </label>
          <input type="password" id="password" placeholder="Enter a password here" />
        <button type="submit">Submit</button><button type="cancel">Cancel</button>
      </form>
    );
  }
}
