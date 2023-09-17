import { ThemeProvider } from '@emotion/react';
import Navigation from 'navigation';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import theme from 'theme';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" />
        <Navigation />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
