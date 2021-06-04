import {types} from '../types/types';

export const userLogin = name => {
  return {
    type: types.USER_LOGIN,
    payload: {name},
  };
};

export const userLogout = name => {
  return {
    type: types.USER_LOGOUT,
    payload: {},
  };
};
