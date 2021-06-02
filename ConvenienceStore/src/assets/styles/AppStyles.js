import {StyleSheet} from 'react-native';
import {KEPPEL, KEPPEL_ALPHA, WHITE} from '../colors/Color';

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  transparent: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: KEPPEL_ALPHA,
  },
  itemsContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 100,
  },
  vegezone: {
    fontFamily: 'calligraffitti-regular',
    color: WHITE,
    fontSize: 50,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  ellipse: {
    width: 125,
    height: 125,
    alignSelf: 'center',
    borderRadius: 125 / 2,
  },
  text: {
    color: WHITE,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: KEPPEL,
  },
});

export default AppStyles;
