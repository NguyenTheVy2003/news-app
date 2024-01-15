/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import AppNavigation from './src/component/navigation/AppNavigation';
import { UserProvider } from './src/component/news/user/UserContext';
import AxiosInstance from './src/helper/AxiosInstance';


function App(): JSX.Element {
  return (
    <SafeAreaView style = {styles.container}>
    <UserProvider>
      <AppNavigation/>
    </UserProvider>
 
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor :'#fff',
    width: '100%',
    height: '100%',
  }
});

export default App;
