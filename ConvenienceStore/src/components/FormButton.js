import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import FormStyles from '../assets/styles/FormStyles';
import {ZIRCON} from '../assets/colors/Color';
import CrossPlatformIcon from 'react-native-cross-platform-icons';

const FormButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={FormStyles.buttonContainer} {...rest}>
      <CrossPlatformIcon name={'arrow-forward'} size={20} color={ZIRCON} />
      <Text style={FormStyles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;
