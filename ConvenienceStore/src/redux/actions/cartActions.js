import {types} from '../types/types';

export const addItemToCart = item => {
  return {
    type: types.ADD_TO_CART,
    payload: item,
  };
};

export const removeItemFromCart = item => {
  return {
    type: types.REMOVE_FROM_CART,
    payload: item,
  };
};
