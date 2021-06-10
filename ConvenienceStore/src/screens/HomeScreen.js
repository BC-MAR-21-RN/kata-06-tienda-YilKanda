import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/actions/userActions';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <View>
      <TouchableOpacity
        onPress={() => dispatch(logout())}
        style={{
          alignItems: 'center',
          backgroundColor: '#DDDDDD',
          padding: 10,
        }}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
