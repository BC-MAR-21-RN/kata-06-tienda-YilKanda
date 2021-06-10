import React, {useState} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import FormStyles from '../assets/styles/FormStyles';
import BackgroundImageOpacity from '../components/BackgroundImageOpacity';
import BackgroundWhiteTop from '../components/BackgroundWhiteTop';
import FormClose from '../components/FormClose';
import FormTitle from '../components/FormTitle';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import FormText from '../components/FormText';
import {createUser} from '../redux/actions/userActions';

const SignUpScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <BackgroundImageOpacity>
      <BackgroundWhiteTop />
      <View style={FormStyles.containerText}>
        <FormClose />
        <FormTitle titleText={'Create Account'} />
        <View>
          <FormInput
            labelValue={userName}
            onChangeText={name => setUserName(name)}
            placeholderText={'Full Name'}
            icon={'person-outline'}
          />
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
          <FormButton
            buttonTitle={'CREATE ACCOUNT'}
            onPress={() => dispatch(createUser(userName, email, password))}
          />
        </View>
        <FormText
          titleText={'SIGN IN'}
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </BackgroundImageOpacity>
  );
};

export default SignUpScreen;
