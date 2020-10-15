import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image as RNImage,
  Platform,
  View,
} from 'react-native';
import {SCREEN_WIDTH, SCREEN_THRESHOLD} from '@constants';

const isMAcOS = Platform.OS === 'macos';
const Image = isMAcOS ? RNImage : require('react-native-fast-image');

const size = SCREEN_WIDTH < SCREEN_THRESHOLD ? 400 : 600;

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
  const {high, medium} = video.snippet.thumbnails;

  const {width, height, url: uri} =
    SCREEN_WIDTH < SCREEN_THRESHOLD ? medium : high;

  const animatedStyle = {
    opacity: focused ? 0.7 : 1,
    transform: [{scale: focused ? 0.95 : 1}],
  };

  return (
    <View>
      <TouchableHighlight
        onPress={onPress}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        onPressIn={() => setFocused(true)}
        onPressOut={() => setFocused(false)}
        style={[styles.container, animatedStyle]}>
        <>
          <Image source={{uri}} style={{width, height}} />
          <Text style={styles.title}>{video.snippet.title}</Text>
        </>
      </TouchableHighlight>
    </View>
  );
};
