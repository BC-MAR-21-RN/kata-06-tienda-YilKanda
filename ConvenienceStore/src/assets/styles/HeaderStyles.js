import {StyleSheet} from 'react-native';
import {ZIRCON} from '../colors/Color';

const HeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  leftIconButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignSelf: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 15,
    color: ZIRCON,
  },
  rightIconButton: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
});

export default HeaderStyles;
