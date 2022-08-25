import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Register from '../screens/Register';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import NewPage from '../screens/NewPage';
import Profile from '../screens/Profile';
import ProfileEditor from '../screens/ProfileEditor';

import {setUserDetails} from '../redux/actions/userActions';
import MainTabs from './MainTabs';
import BasicDetailsTab from '../screens/ProfileEditor/BasicDetailsTab';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

export default function Routes() {
  const dispatch = useDispatch();

  const getStoredUser = async () => {
    const storedUser = await AsyncStorage.getItem('user');

    if (storedUser) {
      dispatch(setUserDetails(JSON.parse(storedUser)));
    }
  };

  useEffect(() => {
    getStoredUser();
  }, []);

  const {userDetails} = useSelector(state => state.userReducer);

  return (
    <NavigationContainer>
      <Stack.Navigator theme={MyTheme}>
        {!userDetails ? (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="ProfileEditor" component={ProfileEditor} />
          </>
        ) : (
          <Stack.Screen name="Dashboard" component={MainTabs} />
        )}
      </Stack.Navigator>
      <Stack.Screen name="BasicDetailsTab" component={BasicDetailsTab} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
