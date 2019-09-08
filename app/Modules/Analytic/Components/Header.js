import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles';
import Separator from './Separator';

export default function Header(props) {
  const {onLogout = () => {}} = props;
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.logout} onPress={onLogout}>
          {' '}
          Logout{' '}
        </Text>
      </View>
      <Separator
        // eslint-disable-next-line react-native/no-inline-styles
        customStyle={{
          marginTop: 0,
        }}
      />
    </>
  );
}
