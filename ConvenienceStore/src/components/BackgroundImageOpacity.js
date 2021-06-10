import React from 'react';
import {View, ImageBackground} from 'react-native';
import AppStyles from '../assets/styles/AppStyles';
import {image} from '../assets/images/Images';

const BackgroundImageOpacity = ({children}) => {
  return (
    <View style={AppStyles.container}>
      <ImageBackground source={image} style={AppStyles.image}>
        <View style={AppStyles.transparent}>{children}</View>
      </ImageBackground>
    </View>
  );
};

export default BackgroundImageOpacity;
