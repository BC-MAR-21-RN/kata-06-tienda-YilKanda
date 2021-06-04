import React from 'react';
import {Text} from 'react-native';
import FormStyles from '../assets/styles/FormStyles';

const FormTextForgetPass = ({titleText, ...rest}) => {
  return (
    <Text style={FormStyles.textForgot} {...rest}>
      {titleText}
    </Text>
  );
};

export default FormTextForgetPass;
