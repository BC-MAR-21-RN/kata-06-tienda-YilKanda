import {StyleSheet} from 'react-native';
import {windowWidth} from '../utils/Dimensions';

const FormCheckoutStyles = StyleSheet.create({
  vwCheckout: {
    width: windowWidth*0.9,
    height: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: 30,
  },
  vwSubTotal: {
    flexDirection: 'row',
  },
  lblSubTotal: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 14,
  },
  lblSubTotalAmount: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 16,
  },
  vwBtnCheckout: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,1)',
    borderRadius: 5,
  },
  lblCheckout: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 10,
  },
});

export default FormCheckoutStyles;
