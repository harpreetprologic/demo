/**
 * Custom TextInput
 */
import {StyleSheet, View} from 'react-native';
import {Text, Input, Box} from 'native-base';
import React, {useRef} from 'react';

export default function TextInput({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
}) {
  const inputRef = useRef(null);
  console.log('...inputRef: ', inputRef);
  return (
    <Box my={2}>
      <Text>{label}</Text>
      <Input
        ref={inputRef}
        mt={2}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder ?? label}
        backgroundColor="#fff"
        borderRadius={10}
        secureTextEntry={secureTextEntry}
      />
    </Box>
  );
}

const styles = StyleSheet.create({});
