import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';

import store from './store/store';
import UserHomeContainer from './containers/userHomeContainer';
import Editor from './containers/editor';
import UserLogin from './containers/userLogin';
import UserSignUp from './containers/userSignUp';
import UserSignUpSuccess from './components/userSignUpSuccess';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link" to="/design">Add a new design</Link>
              <Link className="nav-item nav-link" to="/signup">Sign up</Link>
              <Link className="nav-item nav-link" to="/login">Login</Link>
              <Link className="nav-item nav-link" to="/">Home</Link>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/design" component={Editor} />          
          <Route path="/login" component={UserLogin} />          
          <Route path="/signup/success" component={UserSignUpSuccess} />                    
          <Route path="/signup" component={UserSignUp} />          
          <Route path="/" component={UserHomeContainer} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>    
  </Provider>
  , document.querySelector('.main-container'));
