import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';

import {Text} from 'native-base';
import {Button} from '../../components/inputs';
import {logout} from '../../redux/actions/userActions';

export default function Dashboard() {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Dashboard</Text>
      <Button onPress={() => dispatch(logout())}>Logout</Button>
    </View>
  );
}

const styles = StyleSheet.create({});
