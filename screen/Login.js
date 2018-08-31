import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image, TextInput} from 'react-native';
import {AsyncStorage} from 'react-native';

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: ''
    };
  }

  async save (navigate, user) {
    try {
      navigate('Main', { name: 'Main' })
      await AsyncStorage.setItem('profile', JSON.stringify(user))
      console.log('Deu certo!')
    } catch (e) {
      console.log('error saving data' + e)
    }
  }

  login (navigate) {
    fetch(`http://localhost:3000/login/email/${this.state.email}/senha/${this.state.senha}`, {
      method: 'GET'
    }).then(response => response.json())
      .then((responseJson) => {
      console.log(responseJson)
      this.save(navigate, responseJson )
    }).catch((err) => {
      console.log(err.response)
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image
          style={styles.circleImage}
          source={require('../images/user.png')}
        />
        <Text/>

        <TextInput
          style={{height: 40, width: 200, marginTop: 15, borderColor: 'gray', borderWidth: 1, padding: 5}}
          onChangeText={(email) => this.setState({email})}
          placeholder='Digite seu email'
          value={this.state.email}
        />

        <TextInput
          style={{height: 40, width: 200, marginTop: 15, borderColor: 'gray', borderWidth: 1, padding: 5}}
          onChangeText={(senha) => this.setState({senha})}
          placeholder='Digite seu email'
          secureTextEntry={true}
          value={this.state.senha}
        />

        <Button
          title="Login"
          onPress={() =>
            this.login(navigate)}/>
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