import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import { ProvideAuth } from './context/authContext';

import App from './App';

import 'bootstrap/scss/bootstrap.scss';
import './index.scss';

import { store } from 'store';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ProvideAuth>
          <App />
        </ProvideAuth>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
