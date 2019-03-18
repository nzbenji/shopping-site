import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Welcome from './components/Welcome'
import Signup from './components/auth/Signup'
import reducers from './reducers'
import {BrowserRouter, Route} from 'react-router-dom'

import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={Signup} />
      </App>
    </BrowserRouter>
  </Provider>,
document.getElementById('root'));

