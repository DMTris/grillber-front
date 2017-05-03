import React, {Component} from 'react';

export default class Login extends Component {

  render(){
    return(
      <div>
        <h2>Grillber Login</h2>
        <form className="loginForm">
          <label htmlFor="email">Email: </label>
            <input type="email" id="email" placeholder="Enter your email address"/>
          <label htmlFor="password">Password: </label>
            <input type="password" id="password" placeholder="Enter your password" />
          <button type="submit" id="loginSubmit">Submit</button>
        </form>
      </div>
    );
  }
}
