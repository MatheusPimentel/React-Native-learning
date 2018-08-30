import React, { Component } from 'react';
import Navigator from '../router/Navbar'
import {  View, StatusBar } from 'react-native';

export default class Main extends Component{
  static navigationOptions = {
    title: 'Main',
  };
  render(){
    return(
      <Navigator/>
    )
  }
}
