import React from 'react';
import {View, FlatList} from 'react-native';
import BackgroundImageOpacity from '../components/BackgroundImageOpacity';
import BackgroundWhiteBottom from '../components/BackgroundWhiteBottom';
import Header from '../components/Header';
import YourOrdersStyles from '../assets/styles/YourOrdersStyles';
import YourOrdersItem from '../components/YourOrdersItem';
import {orders} from '../config/dbOrders';

const YourOrdersScreen = ({navigation}) => {
  return (
    <BackgroundImageOpacity>
      <BackgroundWhiteBottom />
      <View style={YourOrdersStyles.container}>
        <Header navigation={navigation} name={'Your Orders'} />
        <FlatList
          data={orders}
          renderItem={item => <YourOrdersItem item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </BackgroundImageOpacity>
  );
};

export default YourOrdersScreen;
