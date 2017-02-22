/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/components/Header';
import MovieList from './src/components/MovieList';

const IMDbSearch = () =>  (
  <View style={styles.container}>
    <Header headerText={'IMDbSearch'} />
    <MovieList />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('IMDbSearch', () => IMDbSearch);
