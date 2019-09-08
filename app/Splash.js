/* @flow */
import React, {Component} from 'react';
import {View, StatusBar, StyleSheet, Image} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import NavKeys from './AppRoutes/NavKeys';
import ActionTypes from './Actions/ActionTypes';
const splash = require('../assets/images/splash.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

class Splash extends Component {
  componentDidMount() {
    const {navigation = {}, isLoggedIn} = this.props;

    if (isLoggedIn) {
      navigation.navigate(NavKeys.rootRoute.APP_MODULE);
    } else {
      navigation.navigate(NavKeys.rootRoute.AUTH_MODULE);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent barStyle="light-content" />
        <Image source={splash} style={styles.image} />
      </View>
    );
  }
}

Splash.propTypes = {
  navigation: PropTypes.object,
  isLoggedIn: PropTypes.bool,
};

Splash.defaultProps = {
  navigation: {},
  isLoggedIn: false,
};

const mapStateToProps = state => {
  const {auth = {}} = state;
  const {loginData = {}} = auth;
  const {isLoggedIn = false} = loginData;
  return {isLoggedIn};
};

const mapDispatchToProps = dispatch => ({
  setNavigation: navigation => {
    dispatch({type: ActionTypes.SET_NAVIGATION, payload: navigation});
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Splash);
