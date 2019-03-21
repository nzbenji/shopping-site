import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Signup from './components/auth/Signup'
// import Feature from './components/Feature'
import Signout from './components/auth/Signout'
import Signin from './components/auth/Signin'

import reducers from './reducers'
import {BrowserRouter, Route} from 'react-router-dom'

import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  {
    auth: {authenticated: localStorage.getItem('token')}
  },
  composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route exact path="/signup" component={Signup} />
        <Route path="/signout" component={Signout} />
        <Route path="/signin" component={Signin} />
        {/* <Route path="/feature" component={Feature} /> */}
      </App>
    </BrowserRouter>
  </Provider>,
document.getElementById('root'));

