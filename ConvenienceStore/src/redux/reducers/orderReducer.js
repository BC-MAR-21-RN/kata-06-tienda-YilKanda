import {types} from '../types/types';

const initialState = {
  order: {
    items: [],
    customer: [],
  },
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ORDER: {
      return {
        ...state,
        order: {
          customer: action.payload.customer,
          items: action.payload.cartItems,
        },
      };
    }
    default:
      return state;
  }
};
