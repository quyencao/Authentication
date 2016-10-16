import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

export default class SignIn extends Component {
  render() {
    return (
      <View>
        <Text style={styles.container}>
          Sign In
        </Text>
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
