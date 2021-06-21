import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import BackgroundImageOpacity from '../components/BackgroundImageOpacity';
import BackgroundWhiteBottom from '../components/BackgroundWhiteBottom';
import Header from '../components/Header';
import HomeStyles from '../assets/styles/HomeStyles';
import ItemProduct from '../components/ItemProduct';

const HomeScreen = ({navigation}) => {
  const [dataSource, setDataSource] = useState([]);

  useState(() => {
    let items = Array.apply(null, Array(30)).map((v, i) => {
      return {id: i, src: 'http://placehold.it/200x200?text=' + (i + 1)};
    });
    setDataSource(items);
  }, []);

  return (
    <BackgroundImageOpacity>
      <BackgroundWhiteBottom />
      <View style={HomeStyles.container}>
        <Header navigation={navigation} name={'Home'} />
        <FlatList
          data={dataSource}
          renderItem={({item}) => <ItemProduct style={HomeStyles.item} />}
          numColumns={3}
          keyExtractor={(item, index) => index}
          style={HomeStyles.flatlist}
        />
      </View>
    </BackgroundImageOpacity>
  );
};

export default HomeScreen;
