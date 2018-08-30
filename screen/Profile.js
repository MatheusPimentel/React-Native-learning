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
        console.log(result)
      })
      console.log('Deu certo!')
    } catch (e) {
      console.log('error saving data' + e)
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          title="Go to Home"
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
