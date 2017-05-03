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
import GrillSearch from './components/GrillSearch';
import Calendar from './components/Calendar';
import RegisterForm from './components/RegisterForm';

class App extends Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/grills' component={GrillSearch} />
          <Route path='/calendar' component={Calendar} />
          <Route path='/register' component={RegisterForm} />
        </Switch>
      </Router>
    );
  }
}

export default App;
