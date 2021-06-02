import React from 'react';
import {Text, View, ImageBackground, Image} from 'react-native';
import AppStyles from './src/assets/styles/AppStyles';
import {image, home} from './src/assets/images/Images';

const App = () => {
  return (
    <View style={AppStyles.container}>
      <ImageBackground source={image} style={AppStyles.image}>
        <View style={AppStyles.transparent}>
          <View style={AppStyles.itemsContainer}>
            <View>
              <Text style={AppStyles.vegezone}>Vegezone</Text>
              <Text>{''}</Text>
              <Image source={home} style={AppStyles.ellipse} />
            </View>
            <Text style={AppStyles.text}>Let's shop</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default App;
