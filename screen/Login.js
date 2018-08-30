import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, ProgressBarAndroid, Image, TextInput} from 'react-native';

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image
          style={styles.circleImage}
          source={require('../images/user.png')}
        />
        <Button
          title="Login"
          onPress={() =>
            navigate('Main', { name: 'Main' })}/>
        <ProgressBarAndroid />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  progressBar: {
    flex: 1,
    justifyContent: "space-evenly",
    padding: 10
  },

  circleImage: {
    width: 150,
    height: 150,
    borderRadius: 150/2
  }
});