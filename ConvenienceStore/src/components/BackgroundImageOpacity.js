import React from 'react';
import {View, ImageBackground} from 'react-native';
import AppStyles from '../assets/styles/AppStyles';

const BackgroundImageOpacity = ({children}) => {
  return (
    <View style={AppStyles.container}>
      <ImageBackground
        source={require('../assets/images/background.jpg')}
        style={AppStyles.image}>
        <View style={AppStyles.transparent}>{children}</View>
      </ImageBackground>
    </View>
  );
};

export default BackgroundImageOpacity;
