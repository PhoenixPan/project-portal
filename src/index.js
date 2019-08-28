import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from 'store/store';
import history from 'store/history';
import UserHomeContainer from 'components/userHomeContainer/userHomeContainer';
import Home from 'components/home/home';
import Signup from 'components/signup/signup';
import Navbar from 'components/navbar/navbar';
import PageNotFound from 'components/pageNotFound/pageNotFound';
import 'style/index.css';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div className="router-container">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/user" component={UserHomeContainer} />
                    <Route path="/error" component={PageNotFound} />
                    <Route path="/signup" component={Signup} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.querySelector('.main-container')
);
