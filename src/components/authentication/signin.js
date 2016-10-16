import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

import Button from '../common/button';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }

    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    // Logged user in
    this.setState({password:''});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign In</Text>
        <Text style={styles.lable}>Username:</Text>
        <TextInput
          value={this.state.username}
          onChangeText={(text) => this.setState({username: text})}
          style={styles.input}/>
        <Text style={styles.lable}>Password:</Text>
        <TextInput
          value={this.state.password}
          onChangeText={(text) => this.setState({password:text})}
          secureTextEntry={true}
          style={styles.input}/>
        <Button text={'Sign In'} onPress={this.onPress}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  label: {
    fontSize: 18
  }
});
