/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';

if (Platform.OS !== 'macos') {
  require('react-native-gesture-handler');
}

import App from './src';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
