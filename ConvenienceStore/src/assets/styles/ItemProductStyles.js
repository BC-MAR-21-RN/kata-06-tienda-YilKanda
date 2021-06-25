import {StyleSheet} from 'react-native';
import {WHITE, BLACK, CASPER, BOTTICELLI} from '../colors/Color';

const ItemProductStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 94,
    height: 136,
    backgroundColor: WHITE,
    shadowColor: BLACK,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 1,
    shadowOpacity: 0.1,
    shadowRadius: 0,
  },
  imgProduct: {
    width: 95,
    height: 60,
  },
  imgProduct_imageStyle: {},
  size: {
    top: 0,
    left: 0,
    width: 25,
    height: 25,
  },
  sizeTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
  },
  sizeText: {
    fontFamily: 'roboto-regular',
    color: WHITE,
    fontSize: 10,
  },
  sizeStack: {
    width: 25,
    height: 25,
    marginLeft: 60,
  },
  txtProduct: {
    fontFamily: 'roboto-regular',
    fontWeight: 'bold',
    color: CASPER,
    fontSize: 12,
  },
  txtPrice: {
    fontFamily: 'roboto-regular',
    color: CASPER,
    fontSize: 12,
  },
  btnAddCart: {
    width: 65,
    height: 18,
    backgroundColor: WHITE,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: BOTTICELLI,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtAddToCart: {
    fontFamily: 'roboto-regular',
    color: BOTTICELLI,
    fontSize: 10,
  },
});

export default ItemProductStyles;
