import React, {Component} from 'react';

export default class RegisterForm extends Component {


  constructor(props){
    super(props);
    this.state = { renter: {} };

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
    e.preventdefault();
    let renter = {}
    renter.name = this.state.name;
    renter.email = this.state.email;
    renter.password = this.state.password;
    this.createNewRenter(renter);
    this.props.history.push('/');
  }

  componentDidMount(){

  }

  render(){
    return(
      <form method="post" onSubmit={this.handleSubmit} className="registerForm">
        <label htmlFor="fName">First Name: </label>
          <input type="text" id="fName" placeholder="Enter your first name here" onChange={e => this.setState({name: e.target.value})} />
        <label htmlFor="lName">Last Name: </label>
          <input type="text" id="lName" placeholder="Enter your last name here" />
        <label htmlFor="email">Email: </label>
          <input type="email" id="email" placeholder="Email" onChange={e => this.setState({email: e.target.value})} />
        <label htmlFor="password">Password: </label>
          <input type="password" id="password" placeholder="Enter a password here" onChange={e => this.setState({password: e.target.value})} />
        <button type="submit" value="submit">Submit</button><button type="reset" value="reset">Reset</button>
      </form>
    );
  }
}
