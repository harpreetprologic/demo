import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {Text} from 'native-base';

import Dashboard from '../screens/Dashboard';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import ProfileEditor from '../screens/ProfileEditor';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createDrawerNavigator} from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

// const MyTabs = () => (
//   <Tab.Navigator>
//     <Tab.Screen name="Dashboard" component={Dashboard} />
//     <Tab.Screen name="Profile" component={Profile} />
//     <Tab.Screen name="Settings" component={Settings} />
//   </Tab.Navigator>
// );

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let icon = require('../assets/home.png');
          switch (route.name) {
            case 'Home':
              icon = require('../assets/home.png');
              break;
            case 'Login':
              icon = require('../assets/login.png');
              break;
            case 'Settings':
              icon = require('../assets/setting.png');
              break;
            case 'Profile':
              icon = require('../assets/profile.jpeg');
              break;
          }

          return <Image source={icon} style={{width: 30, height: 30}}></Image>;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Dashboard}
        option={
          {
            // tabBarIcon: ({focused}) => {
            //   return <Image source={imagePath.icHome}></Image>;
            // },
          }
        }
      />
      <Tab.Screen name="Login" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Profile" component={ProfileEditor} />
    </Tab.Navigator>
  );
}

// export default function MainDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Dashboard" component={MyTabs} />
//     </Drawer.Navigator>
//   );
// }

const styles = StyleSheet.create({});
