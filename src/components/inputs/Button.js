/**
 * Custom Button
 */
import {StyleSheet, View} from 'react-native';
import {Text, Button as NBButton, Box} from 'native-base';
import React from 'react';
import colors from '../../constants/colors';

export default function Button({children, variant = 'primary', onPress}) {
  const getBackgroundColor = () => {
    switch (variant) {
      case 'primary':
        return colors.danger;
      case 'text':
        return colors.white;
      default:
        return colors.danger;
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case 'primary':
        return colors.black;
      case 'text':
        return colors.black;
      default:
        return colors.black;
    }
  };

  return (
    <NBButton my={3} backgroundColor={getBackgroundColor()} onPress={onPress}>
      <Text color={getTextColor()}>{children}</Text>
    </NBButton>
  );
}

const styles = StyleSheet.create({
  field: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 10,
    paddingHorizontal: 8,
  },
  marginFieldTop: {
    marginTop: 80,
  },
  StyleName: {
    fontWeight: '400',
  },
});
