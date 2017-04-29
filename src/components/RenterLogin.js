import React, { Component } from 'react';

export default class RenterLogin extends Component {
  constructor(){
    super();
  }

  render(){
    return(
      <form>
        <input type="email" name="email" placeholder="Email address" />
        <input type="password" name="password" placeholder="Password" />
      </form>
    )
  }
}
