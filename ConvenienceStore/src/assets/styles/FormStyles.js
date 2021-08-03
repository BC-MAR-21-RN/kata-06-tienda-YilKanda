import {StyleSheet} from 'react-native';
import {KEPPEL, GULL_GRAY, DOVE_GRAY, ZIRCON, WHITE} from '../colors/Color';
import {windowWidth, windowHeight} from '../utils/Dimensions';

const FormStyles = StyleSheet.create({
  viewFrontgroundTop: {
    top: 0,
    left: 0,
    width: windowWidth,
    height: windowHeight * 0.85,
    position: 'absolute',
    backgroundColor: WHITE,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  viewFrontgroundBottom: {
    bottom: 0,
    left: 0,
    width: windowWidth,
    height: windowHeight * 0.8,
    position: 'absolute',
    backgroundColor: WHITE,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  viewFrontgroundHome: {
    bottom: 0,
    left: 0,
    width: windowWidth,
    height: windowHeight * 0.75,
    position: 'absolute',
    backgroundColor: WHITE,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  containerText: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 50,
  },
  containerClose: {
    marginRight: windowWidth * 0.1,
    justifyContent: 'flex-start',
    alignSelf: 'flex-end',
  },
  title: {
    fontWeight: 'bold',
    color: GULL_GRAY,
    fontSize: 20,
    alignSelf: 'center',
  },
  inputSection: {
    width: windowWidth * 0.8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 66,
    padding: 10,
    marginVertical: 5,
    shadowColor: GULL_GRAY,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    flex: 1,
    color: DOVE_GRAY,
  },
  buttonContainer: {
    width: windowWidth * 0.8,
    height: 61,
    backgroundColor: KEPPEL,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'roboto-700',
    fontSize: 18,
    color: ZIRCON,
  },
  text: {
    fontFamily: 'roboto-700',
    color: ZIRCON,
    fontSize: 18,
    alignSelf: 'center',
  },
  textForgot: {
    fontFamily: 'roboto',
    color: GULL_GRAY,
    fontSize: 18,
    alignSelf: 'center',
  },
});

export default FormStyles;
