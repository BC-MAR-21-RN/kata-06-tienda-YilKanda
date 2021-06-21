import {StyleSheet} from 'react-native';
import {CASPER, BLACK} from '../colors/Color';
import {windowWidth} from '../utils/Dimensions';

const ItemCartStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: BLACK,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.02,
    shadowRadius: 0,
  },
  card: {
    flexDirection: 'row',
    width: windowWidth * 0.9,
  },
  image: {
    width: 145,
    height: 145,
  },
  text: {
    width: windowWidth * 0.9 - 145,
    height: 145,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lblProduct: {
    fontFamily: 'roboto-regular',
    fontWeight: 'bold',
    color: CASPER,
    fontSize: 16,
    alignSelf: 'center',
  },
  lblSize: {
    fontFamily: 'roboto-regular',
    color: CASPER,
    fontSize: 12,
  },
  lblPrice: {
    fontFamily: 'roboto-regular',
    color: CASPER,
    fontSize: 12,
  },
  lblSizeAdd: {
    fontFamily: 'roboto-regular',
    color: CASPER,
    fontSize: 12,
    alignSelf: 'center',
  },
  margin50: {
    marginLeft: 50,
  },
});

export default ItemCartStyles;
