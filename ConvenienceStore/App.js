import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
import Navigation from './src/routing/Navigation';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar hidden />
      <Navigation />
    </Provider>
  );
};

export default App;
