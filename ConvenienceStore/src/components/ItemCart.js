import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import ItemCartStyles from '../assets/styles/ItemCartStyles';
import CrossPlatformIcon from 'react-native-cross-platform-icons';
import {CASPER} from '../assets/colors/Color';
import {removeItemFromCart} from '../redux/actions/cartActions';

const ItemCart = props => {
  const dispatch = useDispatch();
  return (
    <View style={[ItemCartStyles.container, props.style]}>
      <View style={ItemCartStyles.card}>
        <Image
          source={{uri: props.item.img}}
          resizeMode="contain"
          style={ItemCartStyles.image}
        />
        <View style={ItemCartStyles.text}>
          <View style={ItemCartStyles.row}>
            <Text style={ItemCartStyles.lblProduct}>{props.item.name}</Text>
            <TouchableOpacity
              onPress={() => dispatch(removeItemFromCart(props.item))}>
              <CrossPlatformIcon name={'trash'} size={40} color={CASPER} />
            </TouchableOpacity>
          </View>
          <Text style={ItemCartStyles.lblSize}>{props.item.amount}</Text>
          <Text style={ItemCartStyles.lblPrice}>{props.item.price}</Text>
          <View style={[ItemCartStyles.row, ItemCartStyles.margin50]}>
            <TouchableOpacity>
              <CrossPlatformIcon
                name={'remove-circle-outline'}
                size={40}
                color={CASPER}
              />
            </TouchableOpacity>
            <Text style={ItemCartStyles.lblSizeAdd}>1</Text>
            <TouchableOpacity>
              <CrossPlatformIcon
                name={'add-circle-outline'}
                size={40}
                color={CASPER}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemCart;
