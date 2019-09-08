import React from 'react';
import {View} from 'react-native';
import styles from '../styles';

const Separator = props => {
  const {customStyle = {}} = props;
  const separatorStyle = {
    ...styles.separator,
    ...customStyle,
  };

  return <View style={separatorStyle} />;
};

export default Separator;
