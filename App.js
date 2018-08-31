import React, { Component } from 'react';
import Navigator from './router/Navbar';
import InitialRouter from './router/InitialRouter'

export default class App extends Component{
  render(){
    return(
      <InitialRouter/>
      // <Navigator/>
    )
  }
}

