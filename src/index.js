import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';

import store from './store/store';
import UserHomeContainer from './components/userHomeContainer/userHomeContainer';
import Home from './components/home/home';
import Signup from './components/signup/signup';
import Navbar from './components/navbar/navbar';
import PageNotFound from './components/pageNotFound/pageNotFound';
import './style/index.css';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <div className="router-container">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/user" component={UserHomeContainer} />
                    <Route path="/error" component={PageNotFound} />
                    <Route path="/signup" component={Signup} />
                    <Route component={Home} />
                </Switch>
            </div>
        </HashRouter>
    </Provider>,
    document.querySelector('.main-container')
);
