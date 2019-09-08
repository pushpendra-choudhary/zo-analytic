import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';

export default function WithHeader(WrappedFunction, props) {
  const {title, description, data} = props;

  function addHeader() {
    return (
      <View>
        <Text style={styles.chartHeading}>{title}</Text>
        <Text style={styles.chartDescription}>{description}</Text>
        <WrappedFunction data={data} />
      </View>
    );
  }

  return addHeader;
}
