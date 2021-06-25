import {Alert} from 'react-native';
import {types} from '../types/types';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const userLogin = name => {
  return {
    type: types.USER_LOGIN,
    payload: {name},
  };
};

export const userLogout = () => {
  return {
    type: types.USER_LOGOUT,
    payload: {},
  };
};

export const createUser = (displayName, email, password) => {
  return dispatch => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        const userDB = firestore().collection('users').doc(user.uid);
        userDB.set({
          displayName: displayName,
          email: email,
        });
        dispatch(userLogin(user.displayName));
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        } else {
          Alert.alert(error);
        }
      });
  };
};

export const login = (email, password) => {
  return dispatch => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        dispatch(userLogin(user.displayName));
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        } else {
          Alert.alert(error);
        }
      });
  };
};

export const logout = () => {
  return dispatch => {
    auth()
      .signOut()
      .then(() => {
        dispatch(userLogout());
        Alert.alert('User signed out!');
      })
      .catch(error => {
        Alert.alert(error);
      });
  };
};
