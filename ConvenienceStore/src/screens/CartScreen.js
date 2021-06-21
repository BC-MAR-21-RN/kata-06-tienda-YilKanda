import React from 'react';
import {View} from 'react-native';
import BackgroundImageOpacity from '../components/BackgroundImageOpacity';
import BackgroundWhiteBottom from '../components/BackgroundWhiteBottom';
import Header from '../components/Header';
import HomeStyles from '../assets/styles/HomeStyles';
import ItemCart from '../components/ItemCart';

const CartScreen = ({navigation}) => {
  return (
    <BackgroundImageOpacity>
      <BackgroundWhiteBottom />
      <View style={HomeStyles.container}>
        <Header navigation={navigation} name={'My Order'} />
        <ItemCart />
      </View>
    </BackgroundImageOpacity>
  );
};

export default CartScreen;
