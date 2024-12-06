import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppContext } from '../AppContext';
import { GuestStackNavigation } from './StackNavigation';
import { StackNavigation } from './StackNavigation';

const index = () => {
  const { user } = useContext(AppContext); 

  return (
    <NavigationContainer>
      {user ? <StackNavigation /> : <GuestStackNavigation />}
    </NavigationContainer>
  );
};

export default index;