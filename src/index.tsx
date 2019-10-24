import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

import store from 'store/store';
import history from 'store/history';
import Home from 'components/home/home';
import Signup from 'components/signup/signup';
import Navbar from 'components/navbar/navbar';
import PageNotFound from 'components/page-not-found/page-not-found';
import Demo3DCube from 'components/demo-3d-cube/demo-3d-cube';
import 'style/index.css';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div className="router-container">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/error" component={PageNotFound} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/demo" component={Demo3DCube} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.querySelector('.main-container')
);
