import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';

import {Text} from 'native-base';
import {Button} from '../../components/inputs';
import {logout} from '../../redux/actions/userActions';

export default function Profile() {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
