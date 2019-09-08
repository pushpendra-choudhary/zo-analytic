import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';

export default function ProgressChart(props) {
  const {data} = props;
  const {yes = 0, no = 0} = data;
  const total = yes + no;

  if (yes > 0 || no > 0) {
    const yesProgress = yes / total;
    const noProgress = 1 - yesProgress;

    return (
      <>
        <View style={styles.progressContainter}>
          <View style={[styles.yesProgress, {flex: yesProgress}]} />
          <View style={[styles.noProgress, {flex: noProgress}]} />
        </View>
        {
          <>
            <Text style={styles.yesText}>{`Yes: ${yesProgress.toFixed(2) *
              100}%`}</Text>
            <Text style={styles.noText}>{`No: ${noProgress.toFixed(2) *
              100}%`}</Text>
          </>
        }
      </>
    );
  } else {
    return null;
  }
}
