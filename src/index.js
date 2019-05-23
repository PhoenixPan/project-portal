import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';

import store from './store/store';
import UserHomeContainer from './components/userHomeContainer/userHomeContainer';
import Home from './components/home/home';
import Registration from './components/registration/registration';
import Navbar from './components/navbar/navbar';
import PageNotFound from './components/pageNotFound/pageNotFound';
import './style/index.css';
import Particles from 'react-particles-js';
import particlesSetting from './particles.json';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div className="router-container">
        <Navbar />
        <Particles height="100%" className="particles-canvas" params={particlesSetting}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user" component={UserHomeContainer} />
          <Route path="/error" component={PageNotFound} />
          <Route path="/registration" component={Registration} />
          <Route component={Home} />
        </Switch>
      </div>
    </HashRouter>    
  </Provider>
  , document.querySelector('.main-container'));
