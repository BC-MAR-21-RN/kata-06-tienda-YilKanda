import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import {ZIRCON} from '../assets/colors/Color';
import CrossPlatformIcon from 'react-native-cross-platform-icons';

const Header = ({navigation, name}) => {
  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        style={styles.leftIconButton}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <CrossPlatformIcon name={'menu'} size={30} color={ZIRCON} />
      </TouchableOpacity>
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.title}>
          {name}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.rightIconButton}
        onPress={() => navigation.navigate('Cart')}>
        <CrossPlatformIcon name={'cart'} size={30} color={ZIRCON} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  leftIconButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignSelf: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
  leftText: {
    alignSelf: 'center',
    fontSize: 17,
    color: '#007AFF',
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    lineHeight: 15,
    color: '#000',
  },
  rightIconButton: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
  rightText: {
    fontSize: 17,
    color: '#007AFF',
  },
});

export default Header;
