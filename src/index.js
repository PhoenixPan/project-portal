import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect, Link, withRouter } from 'react-router-dom';

import store from './store/store';
import UserHomeContainer from './containers/userHomeContainer';
import Editor from './containers/editor';
import UserLogin from './containers/userLogin';
import UserSignUp from './containers/userSignUp';
import UserSignUpSuccess from './components/userSignUpSuccess';
import PageNotFound from './components/pageNotFound';
import { fakeAuth } from './components/fakeAuth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
))

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
              <Link className="nav-item nav-link" to="/also/will/not/match">Not Match</Link>
            </div>
          </div>
        </nav>
        <AuthButton />
        <Switch>
          {/* <PrivateRoute path="/design" component={Editor} />           */}
          <Route path="/login" component={UserLogin} />          
          <Route path="/signup/success" component={UserSignUpSuccess} />                    
          <Route path="/signup" component={UserSignUp} />          
          <Route path="/" exact component={UserHomeContainer} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>    
  </Provider>
  , document.querySelector('.main-container'));
