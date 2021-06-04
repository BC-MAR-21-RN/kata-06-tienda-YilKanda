import React from 'react';
import {View, TextInput} from 'react-native';
import FormStyles from '../assets/styles/FormStyles';
import {DOVE_GRAY} from '../assets/colors/Color';
import CrossPlatformIcon from 'react-native-cross-platform-icons';

const FormInput = ({labelValue, placeholderText, icon, ...rest}) => {
  return (
    <View style={FormStyles.inputSection}>
      <CrossPlatformIcon name={icon} size={20} color={DOVE_GRAY} />
      <TextInput
        value={labelValue}
        style={FormStyles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor={DOVE_GRAY}
        {...rest}
      />
    </View>
  );
};

export default FormInput;
