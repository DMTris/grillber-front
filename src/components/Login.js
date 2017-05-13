import React, {Component} from 'react';

export default class Login extends Component {
  constructor(props){
    super(props);

    this.state = {isLoggingIn: false};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getRenterByEmail = renter => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    fetch(`https://fathomless-ravine-83804.herokuapp.com/renters/${renter.email}`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(renter),
      headers: myHeaders
    })
    .catch(err => console.log(err));
    this.setState({isLoggingIn: true});
    this.props.history.push('/grills');
  }

  handleSubmit = e => {
    e.preventDefault();
    let renter = {};
    renter.email = this.refs.email.value;
    renter.password = this.refs.password.value;
    this.getRenterByEmail(renter);
  }

  componentDidMount(){
  }

  isLoggingIn(){
    if (this.state.isLoggingIn === false){
      return (
        <p>'Logging in is false'</p>
      );
    }
    return (
      <p>'Logging in is true'</p>
    );
  }

  render(){
    return(
      <div>
        <h2>Grillber Login</h2>
        <form method="get" className="loginForm" onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email: </label>
            <input type="email" id="email" placeholder="Enter your email address" ref="email" required />
          <label htmlFor="password">Password: </label>
            <input type="password" id="password" placeholder="Enter your password" ref="password" required />
          <button type="submit" id="loginSubmit">Submit</button>
        </form>
        <div>{this.isLoggingIn()}</div>
      </div>
    );
  }
}

//donhub@email.com
//qwertyu
