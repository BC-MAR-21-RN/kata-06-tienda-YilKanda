import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';
import BackgroundImageOpacity from '../components/BackgroundImageOpacity';
import BackgroundWhiteCart from '../components/BackgroundWhiteCart';
import FormCheckout from '../components/FormCheckout';
import Header from '../components/Header';
import HomeStyles from '../assets/styles/HomeStyles';
import ItemCart from '../components/ItemCart';
import ItemCartStyles from '../assets/styles/ItemCartStyles';

const CartScreen = ({navigation}) => {
  const cartItems = useSelector(state => state.cartItemsReducer);
  return (
    <BackgroundImageOpacity>
      <BackgroundWhiteCart />
      <View style={HomeStyles.container}>
        <Header navigation={navigation} name={'My Order'} />
        <FormCheckout />
        {cartItems.lenght !== 0 ? (
          <FlatList
            data={cartItems}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <ItemCart item={item} />}
          />
        ) : (
          <View style={ItemCartStyles.emptyCartContainer}>
            <Text style={ItemCartStyles.emptyCartMessage}>
              Your cart is empty
            </Text>
          </View>
        )}
      </View>
    </BackgroundImageOpacity>
  );
};

export default CartScreen;
