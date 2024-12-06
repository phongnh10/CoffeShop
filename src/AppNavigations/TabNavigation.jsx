import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';

import Home from '../TabScreens/Home';
import Favorites from '../TabScreens/Favorites';
import Settings from '../TabScreens/Settings';
import Shoping from '../TabScreens/Shoping';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconSource;

          if (route.name === 'Home') {
            iconSource = focused
              ? require('../../icon/tab/home.png')
              : require('../../icon/tab/home.png');
          } else if (route.name === 'Shoping') {
            iconSource = focused
              ? require('../../icon/tab/Shop.png')
              : require('../../icon/tab/Shop.png');
          } else if (route.name === 'Favorites') {
            iconSource = focused
              ? require('../../icon/icon_heath.png')
              : require('../../icon/icon_heath.png');
          } else if (route.name === 'Setting') {
            iconSource = focused
              ? require('../../icon/tab/Mesenger.png')
              : require('../../icon/tab/Mesenger.png');
          }
          return (
            <Image
              source={iconSource}
              style={{
                width: size,
                height: size,
                tintColor: color,
              }}
            />
          );
        },
        tabBarActiveTintColor: '#D17842',
        tabBarInactiveTintColor: '#4E5053',
        headerShown: false,
        tabBarStyle: {backgroundColor: '#1E1E1E', borderBlockColor: 'null'},
        tabBarLabel: () => null,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Shoping" component={Shoping} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Setting" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
