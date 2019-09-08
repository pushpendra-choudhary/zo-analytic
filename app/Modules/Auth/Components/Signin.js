import React, {Component} from 'react';
import {View, Text} from 'react-native';

import styles from '../styles';

export default class Signin extends Component {
  render() {
    const {onLogin} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.loginButton} onPress={onLogin}>
          Login
        </Text>
      </View>
    );
  }
}
