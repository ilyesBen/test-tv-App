import React from 'react';
import {Platform} from 'react-native';

import {Home} from '@screens/Home';

const App: () => React$Node = () => {
  if (Platform.OS === 'macos') {
    return <Home />;
  }

  const {AppNavigator} = require('@navigator');
  const {NavigationContainer} = require('@react-navigation/native');
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
