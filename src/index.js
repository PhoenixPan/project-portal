import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom';

import store from './store/store';
import UserHomeContainer from './containers/userHomeContainer/userHomeContainer';
import Editor from './containers/editor/editor';
import UserLogin from './containers/userLogin/userLogin';
import UserSignUp from './containers/userSignUp/userSignUp';
import Navbar from './containers/navbar/navbar';
import UserSignUpSuccess from './components/userSignUpSuccess/userSignUpSuccess';
import PageNotFound from './components/pageNotFound/pageNotFound';
import { fakeAuth } from './constants/fakeAuth';

import "./index.css";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
            pathname: "/login",
            state: { from: props.location }
          }} />
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
      <div className="router-container">
        <Navbar />
        <AuthButton />
        <Switch>
          <PrivateRoute path="/designs/new" component={Editor} />        
          <PrivateRoute path="/designs/edit/:id" component={Editor} />         
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
