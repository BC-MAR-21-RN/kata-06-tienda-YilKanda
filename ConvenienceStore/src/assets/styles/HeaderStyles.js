import {StyleSheet} from 'react-native';
import {ZIRCON, CELERY} from '../colors/Color';

const HeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 20,
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
  itemCountContainer: {
    position: 'absolute',
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: CELERY,
    right: 22,
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
  },
  itemCountText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HeaderStyles;
