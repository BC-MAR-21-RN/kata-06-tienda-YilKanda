import React from 'react';
import {View, ImageBackground} from 'react-native';
import AppStyles from '../assets/styles/AppStyles';
import FormStyles from '../assets/styles/FormStyles';
import {image} from '../assets/images/Images';
import BackgroundWhite from '../components/BackgroundWhite';
import FormClose from '../components/FormClose';
import FormTitle from '../components/FormTitle';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import FormText from '../components/FormText';

const SignUpScreen = ({navigation}) => {
  return (
    <View style={AppStyles.container}>
      <ImageBackground source={image} style={AppStyles.image}>
        <View style={AppStyles.transparent}>
          <BackgroundWhite />
          <View style={FormStyles.containerText}>
            <FormClose />
            <FormTitle titleText={'Create Account'} />
            <View>
              <FormInput
                placeholderText={'Full Name'}
                icon={'person-outline'}
              />
              <FormInput placeholderText={'Email'} icon={'mail-outline'} />
              <FormInput
                placeholderText={'Password'}
                icon={'lock-closed-outline'}
              />
              <FormButton buttonTitle={'CREATE ACCOUNT'} />
            </View>
            <FormText
              titleText={'SIGN IN'}
              onPress={() => navigation.navigate('SignIn')}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignUpScreen;
