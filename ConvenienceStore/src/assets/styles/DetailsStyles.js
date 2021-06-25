import {StyleSheet} from 'react-native';
import {BLACK, GULL_GRAY, CASPER, KEPPEL, WHITE} from '../colors/Color';
import {windowWidth} from '../utils/Dimensions';

const DetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  vwBackImage: {
    height: windowWidth * 0.85,
    width: windowWidth * 0.85,
    backgroundColor: WHITE,
    borderWidth: 1,
    borderColor: WHITE,
    borderRadius: 20,
    shadowColor: BLACK,
    shadowOffset: {
      height: 5,
      width: 1,
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: windowWidth * 0.8,
    height: 320,
  },
  width85: {
    width: windowWidth * 0.85,
  },
  width80: {
    width: windowWidth * 0.8,
  },
  lblNameProduct: {
    fontFamily: 'roboto-700',
    fontWeight: 'bold',
    color: GULL_GRAY,
    fontSize: 16,
  },
  lblPriceProduct: {
    fontFamily: 'roboto-regular',
    color: GULL_GRAY,
    fontSize: 12,
  },
  lblDescriptionProduct: {
    color: GULL_GRAY,
    fontSize: 12,
    textAlign: 'justify',
    letterSpacing: 0,
  },
  vwAddRemoveMount: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lblMountProduct: {
    fontFamily: 'roboto-regular',
    color: CASPER,
    fontSize: 12,
  },
  btnAddToCart: {
    width: windowWidth,
    height: 60,
    backgroundColor: KEPPEL,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lblAddToCart: {
    fontFamily: 'roboto-700',
    fontWeight: 'bold',
    color: WHITE,
    fontSize: 16,
  },
});

export default DetailsStyles;
