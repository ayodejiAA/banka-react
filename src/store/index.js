import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';

const middleware = [reduxThunk];

const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = process.env.NODE_ENV === 'development' ? composeEnhansers(applyMiddleware(...middleware))
  : applyMiddleware(...middleware);

const store = createStore(rootReducer, enhancer);

export default store;
