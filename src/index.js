import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from './store/store';
import UserHomeContainer from './components/userHomeContainer/userHomeContainer';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import PageNotFound from './components/pageNotFound/pageNotFound';
import './style/index.css';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
        <Component {...props} />
    }
  />
);


ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <div className="router-container">
        <Navbar />
        <Switch>      
          <Route path="/user" component={UserHomeContainer} />
          <Route path="/error" component={PageNotFound} />
          <Route component={Home} />
        </Switch>
      </div>
    </BrowserRouter>    
  </Provider>
  , document.querySelector('.main-container'));
