import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import LoginPage from './src/Pages/LoginPage';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <LoginPage />
    </SafeAreaView>
  );
}

export default App;
