import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import Onboarding from 'screens/auth/onboarding';
import { AuthStackParamList } from 'types';
import Signup from 'screens/auth/signup';
import VerifyOtp from 'screens/auth/verify-otp';
import SelectCountry from 'screens/auth/select-country';
import ChooseUsername from 'screens/auth/choose-username';
import SetDisplay from 'screens/auth/set-display';

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
      <AuthStack.Screen name="Signup" component={Signup} />
      <AuthStack.Screen name="VerifyOtp" component={VerifyOtp} />
      <AuthStack.Screen name="SelectCountry" component={SelectCountry} />
      <AuthStack.Screen name="ChooseUsername" component={ChooseUsername} />
      <AuthStack.Screen name="SetDisplay" component={SetDisplay} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
