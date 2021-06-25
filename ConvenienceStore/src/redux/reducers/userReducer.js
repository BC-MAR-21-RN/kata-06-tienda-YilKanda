import {types} from '../types/types';

const initialState = {
  isLoggedIn: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_LOGIN: {
      const {name = 'anon'} = action.payload;
      return {
        ...state,
        isLoggedIn: true,
      };
    }
    case types.USER_LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
};
