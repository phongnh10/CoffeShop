import {StyleSheet, View} from 'react-native';
import React from 'react';

import Login from '../StackScreens/Login';
import Register from '../StackScreens/Register';
import Splash from '../StackScreens/Splash';
import Profile from '../StackScreens/Profile';
import Payment from '../StackScreens/Payment';
import ProductDetail from '../StackScreens/ProductDetail';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';

// Stack dành cho khách chưa đăng nhập
const GuestStack = createNativeStackNavigator();

const GuestStackNavigation = () => {
  return (
    <GuestStack.Navigator screenOptions={{headerShown: false}}>
      <GuestStack.Screen name="Login" component={Login} />
      <GuestStack.Screen name="Register" component={Register} />
      <GuestStack.Screen name="TabNavigation" component={TabNavigation} />
    </GuestStack.Navigator>
  );
  <View></View>;
};

// Stack dành cho toàn bộ ứng dụng
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export {StackNavigation, GuestStackNavigation};
