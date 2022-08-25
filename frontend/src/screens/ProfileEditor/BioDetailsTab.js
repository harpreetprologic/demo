import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function BioDetailsTab({
  navigation,
  nextStep,
  height,
  setHeight,
  weight,
  setWeight,
}) {
  return (
    <View style={{flex: 1}}>
      <KeyboardAwareScrollView
        contentContainerStyle={{flex: 1, marginTop: 15, paddingHorizontal: 15}}>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.textView}>Height(cm)</Text>
          <TextInput
            style={styles.input}
            onChangeText={setHeight}
            placeholder="Enter your Height"
            autoCapitalize="none"
            value={height}></TextInput>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.textView}>Weight(kg)</Text>
          <TextInput
            style={styles.input}
            onChangeText={setWeight}
            placeholder="Enter your Height"
            autoCapitalize="none"
            value={weight}></TextInput>
        </View>
      </KeyboardAwareScrollView>
      <TouchableOpacity onPress={nextStep} style={styles.button1}>
        <Text style={{fontSize: 20, color: 'white'}}>Next Step</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textView: {
    fontSize: 20,
    width: '30%',
    marginTop: 5,
  },
  input: {
    width: '99%',
    height: 40,
    marginTop: 5,
    borderWidth: 1,
    padding: 10,
  },
  button1: {
    alignItems: 'center',
    padding: 8,
    // marginLeft: 55,
    // marginRight: 55,
    width: '95%',
    height: 40,
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor: '#3498eb',
  },
});
