import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
import RootStack from './src/routing/RootStack';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar hidden />
      <RootStack />
    </Provider>
  );
};

export default App;
