import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from './store/store';
import UserHome from './containers/userHome';
import Editor from './containers/editor';
import UserLogin from './containers/userLogin';
import UserSignUp from './containers/userSignUp';
import UserSignUpSuccess from './containers/userSignUpSuccess';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <Switch>
          <Route path="/design" component={Editor} />          
          <Route path="/login" component={UserLogin} />          
          <Route path="/signup/success" component={UserSignUpSuccess} />                    
          <Route path="/signup" component={UserSignUp} />          
          <Route path="/" component={UserHome} />
        </Switch>
    </BrowserRouter>    
  </Provider>
  , document.querySelector('.main-container'));
