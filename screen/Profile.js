import React from 'react';
import {StyleSheet, Text, View, Button, AsyncStorage} from 'react-native';

export default class Profile extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  async getValue () {
    try {
      await AsyncStorage.getItem('profile', (err, result) => {
        if (err) {
          console.log('error in getValue' + err)
        }
        const item = JSON.parse(result)
        console.log(item)
        console.log(item.email)
        console.log(item.senha)
      })
    } catch (e) {
      console.log('error saving data' + e)
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          title="Recuperar usuário"
          onPress={() =>
            this.getValue()
          }/>
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
});
