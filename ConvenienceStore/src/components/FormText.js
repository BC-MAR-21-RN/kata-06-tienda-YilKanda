import React from 'react';
import {Text} from 'react-native';
import FormStyles from '../assets/styles/FormStyles';

const FormText = ({titleText, ...rest}) => {
  return (
    <Text style={FormStyles.text} {...rest}>
      {titleText}
    </Text>
  );
};

export default FormText;
