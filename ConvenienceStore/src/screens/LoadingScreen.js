import React, {useState, useEffect} from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import BackgroundImageOpacity from '../components/BackgroundImageOpacity';
import AppStyles from '../assets/styles/AppStyles';
import {home} from '../assets/images/Images';

const LoadingScreen = ({navigation}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(infoUser) {
    setUser(infoUser);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const handleClick = () => {
    user ? navigation.navigate('App') : navigation.navigate('Auth');
  };

  return (
    <BackgroundImageOpacity>
      <View style={AppStyles.itemsContainer}>
        <View>
          <Text style={AppStyles.vegezone}>Vegezone</Text>
          <Text>{''}</Text>
          <Image source={home} style={AppStyles.ellipse} />
        </View>
        <TouchableOpacity onPress={() => handleClick()}>
          <Text style={AppStyles.text}>Let's shop</Text>
        </TouchableOpacity>
      </View>
    </BackgroundImageOpacity>
  );
};

export default LoadingScreen;
