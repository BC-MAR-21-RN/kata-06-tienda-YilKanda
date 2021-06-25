import {types} from '../types/types';

const initialState = [];

export const cartItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART: {
      return [...state, action.payload];
    }
    case types.REMOVE_FROM_CART: {
      return state.filter(cartItem => cartItem.id !== action.payload.id);
    }
    default:
      return state;
  }
};
