import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {CASPER} from '../assets/colors/Color';
import CrossPlatformIcon from 'react-native-cross-platform-icons';

import BackgroundImageOpacity from '../components/BackgroundImageOpacity';
import BackgroundWhiteBottom from '../components/BackgroundWhiteBottom';
import Header from '../components/Header';
import {addItemToCart} from '../redux/actions/cartActions';
import DetailsStyles from '../assets/styles/DetailsStyles';

const DetailsScreen = ({route, navigation}) => {
  const {item} = route.params;
  const dispatch = useDispatch();
  return (
    <BackgroundImageOpacity>
      <BackgroundWhiteBottom />
      <View style={DetailsStyles.container}>
        <Header navigation={navigation} name={'Details'} />
        <View style={DetailsStyles.vwBackImage}>
          <Image
            source={{
              uri: item.img,
            }}
            resizeMode="contain"
            style={DetailsStyles.img}
          />
        </View>
        <View style={DetailsStyles.width85}>
          <Text style={DetailsStyles.lblNameProduct}>{item.name}</Text>
          <Text style={DetailsStyles.lblPriceProduct}>{item.price}</Text>
        </View>

        <View style={DetailsStyles.width85}>
          <Text style={DetailsStyles.lblDescriptionProduct}>
            {item.description}
          </Text>
        </View>
        <View style={DetailsStyles.vwAddRemoveMount}>
          <TouchableOpacity>
            <CrossPlatformIcon
              name={'remove-circle-outline'}
              size={35}
              color={CASPER}
            />
          </TouchableOpacity>
          <Text style={DetailsStyles.lblMountProduct}>{item.amount}</Text>
          <TouchableOpacity>
            <CrossPlatformIcon
              name={'add-circle-outline'}
              size={35}
              color={CASPER}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={DetailsStyles.btnAddToCart}
          onPress={() => dispatch(addItemToCart(item))}>
          <Text style={DetailsStyles.lblAddToCart}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </BackgroundImageOpacity>
  );
};

export default DetailsScreen;
