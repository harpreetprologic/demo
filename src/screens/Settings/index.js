import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import Products from '../Products';

export default function Settings() {
  return (
    <View style={{flex: 1}}>
      <Products />
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    marginTop: 5,
    fontSize: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginTop: 5,
    marginBottom: 15,
  },
  button1: {
    alignItems: 'center',
    backgroundColor: '#3498eb',
    padding: 8,
    width: '93%',
    height: 40,
    alignSelf: 'center',
    marginBottom: 10,
  },
});
