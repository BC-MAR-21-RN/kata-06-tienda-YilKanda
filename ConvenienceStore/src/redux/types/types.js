const USER = '[USER]';
const CART = '[CART]';
const ORDER = '[ORDER]';

export const types = {
  USER_LOGIN: `${USER} Set user as logged in`,
  USER_LOGOUT: `${USER} Set user as logged out`,
  ADD_TO_CART: `${CART} ADD_TO_CART`,
  REMOVE_FROM_CART: `${CART} REMOVE_FROM_CART`,
  ADD_ORDER: `${ORDER} ADD_ORDER`,
};
