import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Home} from '@screens/Home';
import {theme} from '@theme';

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: theme.surface,
    margin: 15,
    borderRadius: 10,
    height: 60,
  },
});

const Test = () => (
  <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
    <Text style={{fontSize: 54}}>Hello</Text>
  </View>
);

const Tab = createMaterialTopTabNavigator();

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: styles.tabBar,
        style: {
          backgroundColor: theme.header,
        },
        labelStyle: {
          color: theme.onSurface,
          fontSize: 24,
        },
      }}
      swipeEnabled={false}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Test} />
    </Tab.Navigator>
  );
};
