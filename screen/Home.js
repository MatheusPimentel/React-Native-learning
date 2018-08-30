import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Profile extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          title="Go to  profile"
          onPress={() =>
            navigate('Profile', { name: 'Profile' })
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
