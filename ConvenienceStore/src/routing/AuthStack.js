import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="SignUp" headerMode="none">
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
