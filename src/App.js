import React, { Component } from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import AvengerPage from './components/AvengerPage';
import { Route, Link } from 'react-router-dom';

import avengers from './data';


class App extends Component {
  constructor() {
    super();
    this.state = {
      avengers: avengers
    };
  }

  render() { 
    return (
  <div className='App'>
  <Navigation />
  <Route exact path='/' component={Home} />
  <Route exact path='/about' component={About} />
  <Route path='/about/:id' component={AvengerPage} />
  <Route exact path='/contact' component={Contact} />
  </div>
    )
  }
}

export default App;
