import React from 'react';
import {View} from 'react-native';
import FormStyles from '../assets/styles/FormStyles';
import {DOVE_GRAY} from '../assets/colors/Color';
import CrossPlatformIcon from 'react-native-cross-platform-icons';

const FormClose = ({...rest}) => {
  return (
    <View style={FormStyles.containerClose}>
      <CrossPlatformIcon name={'close'} size={20} color={DOVE_GRAY} />
    </View>
  );
};

export default FormClose;
