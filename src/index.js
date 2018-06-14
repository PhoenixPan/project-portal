import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

//store={createStoreWithMiddleware(reducers)}
ReactDOM.render(
  <Provider >
    <App />
  </Provider>
  , document.querySelector('.main-container'));
