import React from 'react';
import {View, ImageBackground, Text, TouchableOpacity} from 'react-native';
import Svg, {Ellipse} from 'react-native-svg';
import {CELERY} from '../assets/colors/Color';
import ItemProductStyles from '../assets/styles/ItemProductStyles';

const ItemProduct = props => {
  return (
    <View style={[ItemProductStyles.container, props.style]}>
      <ImageBackground
        source={require('../assets/images/product.png')}
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
              <Text style={ItemProductStyles.sizeText}>1Kg</Text>
            </View>
          </Svg>
        </View>
      </ImageBackground>
      <Text style={ItemProductStyles.txtProduct}>Argan</Text>
      <Text style={ItemProductStyles.txtPrice}>$10</Text>
      <TouchableOpacity style={ItemProductStyles.btnAddCart}>
        <Text style={ItemProductStyles.txtAddToCart}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemProduct;
