import Config from 'react-native-config';

export const api = (url) =>
  fetch(url)
    .then((response) => response)
    .then((response) => response.json());

export const API_KEY = Config.API_KEY;
