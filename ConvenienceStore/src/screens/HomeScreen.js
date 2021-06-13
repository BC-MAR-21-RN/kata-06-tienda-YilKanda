import React, {useState} from 'react';
import {View, TouchableOpacity, Text, FlatList, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/actions/userActions';
import BackgroundImageOpacity from '../components/BackgroundImageOpacity';
import BackgroundWhiteBottom from '../components/BackgroundWhiteBottom';
import Header from '../components/Header';
import HomeStyles from '../assets/styles/HomeStyles';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

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
        <Header />
        <FlatList
          data={dataSource}
          renderItem={({item}) => (
            <View style={HomeStyles.item}>
              <Image
                style={HomeStyles.image}
                source={{
                  uri: 'https://img1.picmix.com/output/stamp/normal/7/0/0/6/1936007_bcd99.png',
                }}
              />
              <Text>{item.id + 1}</Text>
            </View>
          )}
          //Setting the number of column
          numColumns={3}
          keyExtractor={(item, index) => index}
          style={HomeStyles.flatlist}
        />
        <TouchableOpacity onPress={() => dispatch(logout())}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </BackgroundImageOpacity>
  );
};

export default HomeScreen;
