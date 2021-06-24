import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CrossPlatformIcon from 'react-native-cross-platform-icons';

import HomeScreen from '../screens/HomeScreen';
import LogOutScreen from '../screens/LogOutScreen';
import CartScreen from '../screens/CartScreen';
import DetailsScreen from '../screens/DetailsScreen';
import YourOrdersScreen from '../screens/YourOrdersScreen';

import DrawerStyles from '../assets/styles/DrawerStyles';
import {ZIRCON, WHITE} from '../assets/colors/Color';

const AppStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

const AppTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = 'Home';

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Cart') {
            iconName = 'cart';
          } else if (route.name === 'Your Orders') {
            iconName = 'albums';
          }

          return (
            <CrossPlatformIcon name={iconName} size={size} color={color} />
          );
        },
      })}>
      <Tab.Screen name="Home" component={AppStack} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Your Orders" component={YourOrdersScreen} />
    </Tab.Navigator>
  );
};

export const AppDrawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="AppTab"
      drawerStyle={DrawerStyles.background}
      drawerContentOptions={{
        activeTintColor: ZIRCON,
        inactiveTintColor: WHITE,
      }}>
      <Drawer.Screen name="Home" component={AppTab} />
      <Drawer.Screen name="Your Orders" component={YourOrdersScreen} />
      <Drawer.Screen name="Logout" component={LogOutScreen} />
    </Drawer.Navigator>
  );
};

export default AppDrawer;
