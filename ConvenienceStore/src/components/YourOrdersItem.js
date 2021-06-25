import React, {useState} from 'react';
import {
  View,
  LayoutAnimation,
  Platform,
  UIManager,
  TouchableOpacity,
  Text,
} from 'react-native';
import CrossPlatformIcon from 'react-native-cross-platform-icons';
import {KEPPEL, CASPER} from '../assets/colors/Color';
import YourOrdersStyles from '../assets/styles/YourOrdersStyles';

const YourOrdersItem = ({item}) => {
  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  const [expanded, setExpanded] = useState(false);
  const Products = () => {
    return item.item.products.map(product => {
      return (
        <View style={YourOrdersStyles.vwProduct}>
          <Text style={YourOrdersStyles.name}>{product.name}</Text>
          <Text style={YourOrdersStyles.amount}>{product.amount}</Text>
          <Text style={YourOrdersStyles.price}>${product.price}</Text>
        </View>
      );
    });
  };
  return (
    <View style={YourOrdersStyles.vwBackgroundOrder}>
      <View style={YourOrdersStyles.lblTitle}>
        <Text style={YourOrdersStyles.lblOrder}>
          Order #{item.item.numberOrder}
        </Text>
        <TouchableOpacity
          onPress={() => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
            setExpanded(!expanded);
          }}>
          <CrossPlatformIcon
            name={expanded ? 'chevron-up-outline' : 'chevron-down-outline'}
            size={20}
            color={CASPER}
          />
        </TouchableOpacity>
      </View>
      {expanded && (
        <View>
          <View style={YourOrdersStyles.listProducts}>{Products()}</View>
          <View style={YourOrdersStyles.deliveryRow}>
            <View />
            <Text style={YourOrdersStyles.delivery}>Delivery</Text>
            <Text style={YourOrdersStyles.deliveryPrice}>$4.99</Text>
          </View>
          <View style={YourOrdersStyles.isShipped}>
            <View style={YourOrdersStyles.iconShippedRow}>
              <CrossPlatformIcon
                name={'checkmark-circle'}
                size={20}
                color={KEPPEL}
              />
              <Text style={YourOrdersStyles.shipped}>Shipped</Text>
            </View>
            <Text style={YourOrdersStyles.total}>Total</Text>
            <Text style={YourOrdersStyles.totalAmount}>$14.29</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default YourOrdersItem;
