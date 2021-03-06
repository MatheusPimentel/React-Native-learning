import React, {Component} from 'react';
import {
  createStackNavigator,
  createDrawerNavigator,
  createMaterialTopTabNavigator,
  DrawerActions
} from 'react-navigation';
import {TouchableOpacity, Image} from 'react-native';
import styles from '../style/Style';

import Profile from '../screen/Profile'
import Home from '../screen/Home'
import DrawerScreen from './DrawerScreen'

const Tabs = createMaterialTopTabNavigator({
  Home: Home,
  Profile: Profile
}, {
  tabBarOptions: {
    activeTintColor: '#000',
    inactiveTintColor: 'gray',
    style: {
      backgroundColor: '#fff',
    },
    indicatorStyle: {
      backgroundColor: '#000',
    },
  }
});

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Tabs
  }
}, {
  initialRouteName: 'Home',
  contentComponent: DrawerScreen,
  drawerWidth: 300
});

const MenuImage = ({navigation}) => {
  return <Image source={require('../images/menu-button.png')}/>
};

const StackNavigator = createStackNavigator({

  //important: key and screen name (i.e. DrawerNavigator) should be same while using the drawer navigator inside stack navigator.

  DrawerNavigator: {
    screen: DrawerNavigator
  }
}, {
  navigationOptions: ({navigation}) => ({
    title: 'Navegação',  // Title to appear in status bar
    headerLeft:
      <TouchableOpacity style={styles.iconBar} onPress={() => {
        navigation.dispatch(DrawerActions.toggleDrawer())
      }}>
        <MenuImage navigation={navigation}/>
      </TouchableOpacity>,
    headerStyle: {
      backgroundColor: '#333',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },

  })
});
export default StackNavigator;