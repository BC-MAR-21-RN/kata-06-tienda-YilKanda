import React from 'react';
import {Text} from 'react-native';
import FormStyles from '../assets/styles/FormStyles';

const FormTitle = ({titleText, ...rest}) => {
  return (
    <Text style={FormStyles.title} {...rest}>
      {titleText}
    </Text>
  );
};

export default FormTitle;
