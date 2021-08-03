import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {userReducer} from '../reducers/userReducer';
import {cartItemsReducer} from '../reducers/cartItemsReducer';
import {orderReducer} from '../reducers/orderReducer';

const reducers = combineReducers({
  userReducer: userReducer,
  cartItemsReducer: cartItemsReducer,
  orderReducer: orderReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);
