import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './state/store';
import App from './app';
import './styles/index.scss';

ReactDOM.render((
  <Provider
    store={ store }
  >
    <App />
  </Provider>
), document.getElementById('app'));
