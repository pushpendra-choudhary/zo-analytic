import React from 'react';
import {View} from 'react-native';
import styles from '../styles';

const Separator = props => {
  const {customStyle = {}} = props;
  return <View style={[styles.separator, {customStyle}]} />;
};

export default Separator;
