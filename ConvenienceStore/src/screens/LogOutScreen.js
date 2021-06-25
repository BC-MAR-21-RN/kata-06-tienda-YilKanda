import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/actions/userActions';

const LogOutScreen = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <TouchableOpacity onPress={() => dispatch(logout())}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogOutScreen;
