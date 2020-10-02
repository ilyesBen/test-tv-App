/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import ReactNative, {StyleSheet, Platform, View, FlatList} from 'react-native';

import {useVideos} from '@modules/videos';
import {Video, Header} from '@components';

const StatusBar = Platform.isTV ? View : ReactNative.StatusBar;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#696969',
  },
});

const App: () => React$Node = () => {
  const videos = useVideos();

  const renderItem = ({item}) => {
    return <Video video={item} onPress={() => alert('Hello guys')} />;
  };

  return (
    <>
      <Header />
      <View style={styles.listContainer}>
        <FlatList
          data={videos}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          numColumns={3}
          scrollEnabled
        />
      </View>
    </>
  );
};

export default App;
