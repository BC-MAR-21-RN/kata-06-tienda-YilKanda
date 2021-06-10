import React, {useState} from 'react';
import {View, ImageBackground} from 'react-native';
import {useDispatch} from 'react-redux';
import AppStyles from '../assets/styles/AppStyles';
import FormStyles from '../assets/styles/FormStyles';
import {image} from '../assets/images/Images';
import BackgroundWhite from '../components/BackgroundWhite';
import FormClose from '../components/FormClose';
import FormTitle from '../components/FormTitle';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import FormText from '../components/FormText';
import FormTextForgetPass from '../components/FormTextForgetPass';
import {login} from '../redux/actions/userActions';

const SignInScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={AppStyles.container}>
      <ImageBackground source={image} style={AppStyles.image}>
        <View style={AppStyles.transparent}>
          <BackgroundWhite />
          <View style={FormStyles.containerText}>
            <FormClose />
            <FormTitle titleText={'Sign In'} />
            <View>
              <FormInput
                labelValue={email}
                onChangeText={userEmail => setEmail(userEmail)}
                placeholderText={'Email'}
                icon={'mail-outline'}
                autoCapitalize="none"
                keyboardType="email-address"
              />
              <FormInput
                labelValue={password}
                onChangeText={userPassword => setPassword(userPassword)}
                secureTextEntry={true}
                placeholderText={'Password'}
                icon={'lock-closed-outline'}
              />
              <FormTextForgetPass titleText={'Forgot Password?'} />
            </View>
            <FormButton
              buttonTitle={'SIGN IN'}
              onPress={() => dispatch(login(email, password))}
            />
            <FormText
              titleText={'CREATE ACCOUNT'}
              onPress={() => navigation.navigate('SignUp')}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignInScreen;
