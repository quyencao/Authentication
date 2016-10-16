import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import SignIn from './components/authentication/signin';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SignIn />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
