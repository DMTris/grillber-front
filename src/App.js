//imports
import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
//CSS
import './App.css';

//components
import Login from './components/Login';
import Grills from './components/Grills';
import Calendar from './components/Calendar';
import RegisterForm from './components/RegisterForm';

//https://fathomless-ravine-83804.herokuapp.com/

class App extends Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/grills' component={Grills} />
          <Route path='/calendar' component={Calendar} />
          <Route path='/register' component={RegisterForm} />
        </Switch>
      </Router>
    );
  }
}

export default App;
