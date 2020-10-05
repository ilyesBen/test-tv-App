import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {theme} from '@theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.header,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  title: {
    fontSize: 38,
    fontWeight: '500',
    textAlign: 'center',
    color: 'black',
  },
});

export const Header = ({title = 'My Tv Test App'}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
