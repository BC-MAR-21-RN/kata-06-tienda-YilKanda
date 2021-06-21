import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import HeaderStyles from '../assets/styles/HeaderStyles';
import {ZIRCON} from '../assets/colors/Color';
import CrossPlatformIcon from 'react-native-cross-platform-icons';

const Header = ({navigation, name}) => {
  return (
    <View style={HeaderStyles.container}>
      <TouchableOpacity
        style={HeaderStyles.leftIconButton}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <CrossPlatformIcon name={'menu'} size={30} color={ZIRCON} />
      </TouchableOpacity>
      <View style={HeaderStyles.textWrapper}>
        <Text numberOfLines={1} style={HeaderStyles.screen}>
          {name}
        </Text>
      </View>
      <TouchableOpacity
        style={HeaderStyles.rightIconButton}
        onPress={() => navigation.navigate('Cart')}>
        <CrossPlatformIcon name={'cart'} size={30} color={ZIRCON} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
