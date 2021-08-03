import {types} from '../types/types';

export const addOrder = item => {
  return {
    type: types.ADD_ORDER,
    payload: item,
  };
};
