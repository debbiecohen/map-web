import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';

import locationsReducer from './reducers/locations';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(locationsReducer, composeWithDevTools(applyMiddleware(thunk)));

console.log('hello');
console.log('Backend url:', process.env.REACT_APP_BACKEND_URL);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);