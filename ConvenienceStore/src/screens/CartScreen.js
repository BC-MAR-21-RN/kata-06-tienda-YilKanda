import React from 'react';
import {View, Text} from 'react-native';
import Header from '../components/Header';

const CartScreen = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} name={'CART'} />
      <Text>Cart</Text>
    </View>
  );
};

export default CartScreen;
