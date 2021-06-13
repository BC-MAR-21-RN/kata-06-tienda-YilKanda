import React from 'react';
import {View, Image, Text} from 'react-native';
import BackgroundImageOpacity from '../components/BackgroundImageOpacity';
import AppStyles from '../assets/styles/AppStyles';
import {home} from '../assets/images/Images';

const LoadingScreen = ({navigation}) => {
  return (
    <BackgroundImageOpacity>
      <View style={AppStyles.itemsContainer}>
        <View>
          <Text style={AppStyles.vegezone}>Vegezone</Text>
          <Text>{''}</Text>
          <Image source={home} style={AppStyles.ellipse} />
        </View>
        <Text style={AppStyles.text}>Let's shop</Text>
      </View>
    </BackgroundImageOpacity>
  );
};

export default LoadingScreen;
