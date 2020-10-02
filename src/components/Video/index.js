import React from 'react';
import {StyleSheet, View, Text, Animated, TouchableOpacity} from 'react-native';
import Image from 'react-native-fast-image';

const size = 500;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
    height: size - 30,
    width: size,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    color: 'white',
  },
});

export const Video = ({video, onPress}) => {
  //   console.log('video ', video);
  const {width, height, url: uri} = video.snippet.thumbnails.high;

  console.log('url ', uri);
  console.log('width ', width);
  console.log('height ', height);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={{uri}} style={{width, height}} />
        <Text style={styles.title}>{video.snippet.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
