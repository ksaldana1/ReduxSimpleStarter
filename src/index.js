import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import _ from 'lodash';

import App from './components/app';
import rootReducer from './reducers/index.js';

// create store, add chrome devTools
// https://github.com/zalmoxisus/redux-devtools-extension#implementation
const createStoreWithMiddleware = _.flowRight(applyMiddleware(), window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);

ReactDOM.render(
  // attach store to App => use root reducer
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>
  // attach to container element
  , document.querySelector('.container'));
