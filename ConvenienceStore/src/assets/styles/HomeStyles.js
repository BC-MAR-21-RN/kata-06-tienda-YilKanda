import {StyleSheet} from 'react-native';

const HomeStyles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: 600,
  },
  flatlist: {
    margin: 45,
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 10,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});

export default HomeStyles;
