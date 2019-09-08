import React, {Component} from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from '../styles';
import PieChart from '../Components/PieChart';
import WithHeader from '../Components/WithHeader';
import BarChart from '../Components/BarChart';
import Separator from '../Components/Separator';
import ProgressChart from '../Components/ProgressChart';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ActionTypes from '../../../Actions/ActionTypes';
import Header from '../Components/Header';
import NavKeys from '../../../AppRoutes/NavKeys';

class Analytic extends Component {
  componentDidMount() {
    const {getAnalyticData} = this.props;
    getAnalyticData();
  }

  onLogout = () => {
    const {navigation, logout} = this.props;
    logout();
    if (navigation) {
      navigation.navigate(NavKeys.rootRoute.AUTH_MODULE);
    }
  };

  render() {
    const {pieData = [], ratingData = [], onlineDeliveryData = {}} = this.props;

    const PieWithHeader = WithHeader(PieChart, {
      title: '1. Restaurant Price Range',
      description: 'Restaurant Price Range Presentaion using Pie Chart',
      data: pieData,
    });

    const BarWithHeader = WithHeader(BarChart, {
      title: '2. Restaurant Rating',
      description: 'Restaurant Rating Presentaion using Bar Chart',
      data: ratingData,
    });

    const ProgessWithHeader = WithHeader(ProgressChart, {
      title: '3. Restaurant: Online Delivery Availibilty',
      description:
        'Restaurant Online Delivery Availibilty Presentaion using Progress Line',
      data: onlineDeliveryData,
    });

    return (
      <>
        <Header onLogout={this.onLogout} />
        <ScrollView>
          <View style={styles.container}>
            <PieWithHeader />
            <Separator />
            <BarWithHeader />
            <Separator />
            <ProgessWithHeader />
          </View>
        </ScrollView>
      </>
    );
  }
}

Analytic.propTypes = {
  pieData: PropTypes.array,
  ratingData: PropTypes.array,
  onlineDeliveryData: PropTypes.object,
};

Analytic.defaultProps = {
  pieData: [],
  ratingData: [],
  onlineDeliveryData: {},
};

const mapStateToProps = state => {
  const {analytic} = state;
  const {pieData = [], ratingData = [], onlineDeliveryData = {}} = analytic;
  return {
    pieData,
    ratingData,
    onlineDeliveryData,
  };
};

const mapDispatchToProps = dispatch => ({
  getAnalyticData: () => {
    dispatch({type: ActionTypes.DATA_REQUEST_SUCCESS, payload: {}});
  },
  logout: () => {
    dispatch({type: ActionTypes.RESET, payload: {}});
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Analytic);
