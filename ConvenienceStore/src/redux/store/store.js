import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {userReducer} from '../reducers/userReducer';
import {cartItemsReducer} from '../reducers/cartItemsReducer';

const reducers = combineReducers({
  userReducer: userReducer,
  cartItemsReducer: cartItemsReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);
