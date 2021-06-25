import React from 'react';
import {View, ImageBackground, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import Svg, {Ellipse} from 'react-native-svg';
import {CELERY} from '../assets/colors/Color';
import ItemProductStyles from '../assets/styles/ItemProductStyles';
import {addItemToCart} from '../redux/actions/cartActions';

const ItemProduct = props => {
  const dispatch = useDispatch();
  return (
    <View style={[ItemProductStyles.container, props.style]}>
      <ImageBackground
        source={{uri: props.item.img}}
        resizeMode="contain"
        style={ItemProductStyles.imgProduct}
        imageStyle={ItemProductStyles.imgProduct_imageStyle}>
        <View style={ItemProductStyles.sizeStack}>
          <Svg viewBox="0 0 25 25" style={ItemProductStyles.size}>
            <Ellipse
              strokeWidth={0}
              fill={CELERY}
              cx={13}
              cy={13}
              rx={13}
              ry={13}
            />
            <View style={ItemProductStyles.sizeTextContainer}>
              <Text style={ItemProductStyles.sizeText}>
                {props.item.amount}
              </Text>
            </View>
          </Svg>
        </View>
      </ImageBackground>
      <Text style={ItemProductStyles.txtProduct}>{props.item.name}</Text>
      <Text style={ItemProductStyles.txtPrice}>{props.item.price}</Text>
      <TouchableOpacity
        style={ItemProductStyles.btnAddCart}
        onPress={() => dispatch(addItemToCart(props.item))}>
        <Text style={ItemProductStyles.txtAddToCart}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemProduct;
