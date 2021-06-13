import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';

import LoadingScreen from '../screens/LoadingScreen';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const RootStack = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  function onAuthStateChanged(userInfo) {
    setUser(userInfo);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) {
    return null;
  }

  setTimeout(() => {
    setIsLoading(false);
  }, 5000);

  return (
    <NavigationContainer>
      {isLoading ? <LoadingScreen /> : user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootStack;
