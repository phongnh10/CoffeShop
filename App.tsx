import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import AppNavigations from './src/AppNavigations';
import { index as AppContext } from './src/AppContext';

function App(): React.JSX.Element {
  return (
    <AppContext>
      <SafeAreaView style={myStyle.container}>
        <StatusBar />
        <AppNavigations />
      </SafeAreaView>
    </AppContext>
  );
}

export default App;

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
});
