import React, {Component} from 'react';
import Signin from '../Components/Signin';
import ActionTypes from '../../../Actions/ActionTypes';
import {connect} from 'react-redux';
import NavKeys from '../../../AppRoutes/NavKeys';

class Auth extends Component {
  onLogin = () => {
    const {login, navigation = {}} = this.props;
    login();
    navigation.navigate(NavKeys.rootRoute.APP_MODULE);
  };

  render() {
    return <Signin onLogin={this.onLogin} />;
  }
}

const mapDispatchToProps = dispatch => ({
  login: () => {
    dispatch({
      type: ActionTypes.LOGIN_REQUEST_SUCCESS,
      payload: {isLoggedIn: true},
    });
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(Auth);
