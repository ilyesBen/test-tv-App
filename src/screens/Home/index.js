/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';

import {useVideos} from '@modules/videos';
import {Video, Header, Spinner} from '@components';
import {theme} from '@theme';
import {SCREEN_WIDTH, SCREEN_THRESHOLD} from '@constants';

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background,
  },
  button: {
    backgroundColor: theme.surface,
    borderRadius: 10,
    width: 500,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: theme.onSurface,
    fontSize: 38,
  },
});

const Button = ({text, onPress}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

const Home: () => React$Node = () => {
  const [videos, loading, error, reFetchVideos] = useVideos();

  const renderItem = ({item}) => (
    <Video video={item} onPress={() => alert(item.snippet.description)} />
  );

  if (error) {
    alert(error);
    return (
      <View style={styles.listContainer}>
        <Button text="Try again" onPress={() => reFetchVideos()} />
      </View>
    );
  }

  return (
    <>
      {Platform.OS === 'macos' && <Header />}
      <View style={styles.listContainer}>
        {!loading ? (
          <FlatList
            data={videos}
            renderItem={renderItem}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            numColumns={SCREEN_WIDTH > SCREEN_THRESHOLD ? 3 : 2}
            scrollEnabled
          />
        ) : (
          <Spinner />
        )}
      </View>
    </>
  );
};

export {Home};
