import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';

import reducers from '../reducers/index';

const store = createStore(reducers, applyMiddleware(ReduxPromise));

export default store;