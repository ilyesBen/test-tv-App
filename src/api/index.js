import Config from 'react-native-config';
import {Platform} from 'react-native';
import {API_KEY as API_KEY_MAC_OS} from '@macos-config';

export const api = (url) =>
  fetch(url)
    .then((response) => response)
    .then((response) => response.json());

export const API_KEY =
  Platform.OS === 'macos' ? API_KEY_MAC_OS : Config.API_KEY;
