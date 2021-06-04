import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoadingScreen from '../screens/LoadingScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import HomeScreen from '../screens/HomeScreen';

const AuthStack = createStackNavigator(
  {
    SignUp: SignUpScreen,
    SignIn: SignInScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: 'SignUp',
  },
);

const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);

const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      Auth: AuthStack,
      App: AppStack,
    },
    {
      initialRouteName: 'Loading',
    },
  ),
);

export default createAppContainer(AppNavigator);
