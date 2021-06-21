import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import ItemCartStyles from '../assets/styles/ItemCartStyles';
import CrossPlatformIcon from 'react-native-cross-platform-icons';
import {CASPER} from '../assets/colors/Color';

const ItemCart = props => {
  return (
    <View style={[ItemCartStyles.container, props.style]}>
      <View style={ItemCartStyles.card}>
        <Image
          source={require('../assets/images/product.png')}
          resizeMode="contain"
          style={ItemCartStyles.image}
        />
        <View style={ItemCartStyles.text}>
          <View style={ItemCartStyles.row}>
            <Text style={ItemCartStyles.lblProduct}>Apple</Text>
            <TouchableOpacity>
              <CrossPlatformIcon name={'trash'} size={40} color={CASPER} />
            </TouchableOpacity>
          </View>
          <Text style={ItemCartStyles.lblSize}>1 kg</Text>
          <Text style={ItemCartStyles.lblPrice}>$15</Text>
          <View style={[ItemCartStyles.row, ItemCartStyles.margin50]}>
            <TouchableOpacity>
              <CrossPlatformIcon
                name={'remove-circle-outline'}
                size={40}
                color={CASPER}
              />
            </TouchableOpacity>
            <Text style={ItemCartStyles.lblSizeAdd}>2Kg</Text>
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
