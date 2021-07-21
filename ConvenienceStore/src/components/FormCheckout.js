import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FormCheckoutStyles from '../assets/styles/FormCheckoutStyles';

const FormCheckout = () => {
  return (
    <View style={FormCheckoutStyles.vwCheckout}>
      <View style={FormCheckoutStyles.vwSubTotal}>
        <Text style={FormCheckoutStyles.lblSubTotal}>SubTotal = </Text>
        <Text style={FormCheckoutStyles.lblSubTotalAmount}>$0</Text>
      </View>
      <TouchableOpacity style={FormCheckoutStyles.vwBtnCheckout}>
        <Text style={FormCheckoutStyles.lblCheckout}>Check Out Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormCheckout;
