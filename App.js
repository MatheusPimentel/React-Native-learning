import React, { Component } from 'react';
import Navigator from './router/Navbar'
import {  View, StatusBar } from 'react-native';

export default class App extends Component{
  render(){
    return(
      <Navigator/>
    )
  }
}

