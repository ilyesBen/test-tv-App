import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontal: {},
});

export const Spinner = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" />
  </View>
);
