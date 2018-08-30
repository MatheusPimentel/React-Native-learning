import React, { Component } from 'react';
import Navigator from './router/Navbar';
import InitialRouter from './router/InitialRouter'
import {  View, StatusBar } from 'react-native';

export default class App extends Component{
  render(){
    return(
      <InitialRouter/>
    )
  }
}

