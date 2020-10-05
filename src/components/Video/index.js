import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image as RNImage,
  Platform,
} from 'react-native';

const Image =
  Platform.OS === 'macos' ? RNImage : require('react-native-fast-image');

const size = 500;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
    height: size - 20,
    width: size,
    borderRadius: 20,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    color: 'white',
  },
});

export const Video = ({video, onPress}) => {
  const [focused, setFocused] = useState(false);
  const {width, height, url: uri} = video.snippet.thumbnails.high;

  const animatedStyle = {
    opacity: focused ? 0.7 : 1,
    transform: [{scale: focused ? 0.95 : 1}],
  };

  return (
    <TouchableHighlight
      onPress={onPress}
      onBlur={() => setFocused(false)}
      onFocus={() => setFocused(true)}
      style={[styles.container, animatedStyle]}>
      <>
        <Image source={{uri}} style={{width, height}} />
        <Text style={styles.title}>{video.snippet.title}</Text>
      </>
    </TouchableHighlight>
  );
};
