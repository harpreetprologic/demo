/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import Routes from './src/routes';

import store from './src/redux';

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Routes />
      </NativeBaseProvider>
    </Provider>
  );
};
export default App;
