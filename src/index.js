import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import UserHome from './containers/userHome';
import Editor from './containers/editor';
import UserLogin from './containers/userLogin';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <Switch>
          <Route path="/design" component={Editor} />          
          <Route path="/login" component={UserLogin} />          
          <Route path="/" component={UserHome} />
        </Switch>
    </BrowserRouter>    
  </Provider>
  , document.querySelector('.main-container'));
