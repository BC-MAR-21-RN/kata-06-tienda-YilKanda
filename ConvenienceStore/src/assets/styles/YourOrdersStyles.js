import {StyleSheet} from 'react-native';
import {BLACK, WHITE} from '../colors/Color';
import {windowWidth} from '../utils/Dimensions';

const YourOrdersStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  vwBackgroundOrder: {
    width: windowWidth * 0.85,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE,
    borderWidth: 1,
    borderColor: WHITE,
    shadowColor: BLACK,
    shadowOffset: {
      height: 5,
      width: 0,
    },
    elevation: 5,
    shadowOpacity: 0.05,
    shadowRadius: 0,
    borderRadius: 5,
  },
  lblTitle: {
    width: windowWidth * 0.75,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lblOrder: {
    fontFamily: 'roboto-regular',
    color: 'rgba(155,155,155,1)',
    fontSize: 16,
  },
  listProducts: {
    justifyContent: 'space-between',
  },
  vwProduct: {
    width: windowWidth * 0.75,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: 'roboto-regular',
    color: 'rgba(155,155,155,1)',
    width: windowWidth * 0.4,
  },
  amount: {
    fontFamily: 'roboto-regular',
    color: 'rgba(155,155,155,1)',
  },
  price: {
    fontFamily: 'roboto-regular',
    color: 'rgba(155,155,155,1)',
  },
  deliveryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: windowWidth * 0.75,
    marginTop: 10,
  },
  delivery: {
    fontFamily: 'roboto-regular',
    color: 'rgba(155,155,155,1)',
    fontSize: 16,
    textAlign: 'right',
  },
  deliveryPrice: {
    fontFamily: 'roboto-regular',
    color: 'rgba(155,155,155,1)',
    fontSize: 16,
  },
  isShipped: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: windowWidth * 0.75,
  },
  iconShippedRow: {
    flexDirection: 'row',
  },
  shipped: {
    fontFamily: 'roboto-regular',
    color: 'rgba(57,193,193,1)',
    fontSize: 14,
  },
  totalRow: {
    flexDirection: 'row',
  },
  total: {
    fontFamily: 'roboto-regular',
    color: 'rgba(155,155,155,1)',
    fontSize: 16,
    textAlign: 'right',
  },
  totalAmount: {
    fontFamily: 'roboto-regular',
    color: 'rgba(155,155,155,1)',
    fontSize: 16,
  },
});

export default YourOrdersStyles;
