import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Profile extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          title="Go to Home"
          onPress={() =>
            navigate('Home', { name: 'Home' })
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
