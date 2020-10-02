import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#808080',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
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
