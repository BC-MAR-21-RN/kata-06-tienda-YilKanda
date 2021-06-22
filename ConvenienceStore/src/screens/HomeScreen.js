import React from 'react';
import {View, FlatList} from 'react-native';
import BackgroundImageOpacity from '../components/BackgroundImageOpacity';
import BackgroundWhiteBottom from '../components/BackgroundWhiteBottom';
import Header from '../components/Header';
import HomeStyles from '../assets/styles/HomeStyles';
import ItemProduct from '../components/ItemProduct';
import {products} from '../config/database';

const HomeScreen = ({navigation}) => {
  return (
    <BackgroundImageOpacity>
      <BackgroundWhiteBottom />
      <View style={HomeStyles.container}>
        <Header navigation={navigation} name={'Home'} />
        <FlatList
          data={products}
          renderItem={({item}) => (
            <ItemProduct style={HomeStyles.item} item={item} />
          )}
          numColumns={3}
          keyExtractor={item => item.id.toString()}
          style={HomeStyles.flatlist}
        />
      </View>
    </BackgroundImageOpacity>
  );
};

export default HomeScreen;
