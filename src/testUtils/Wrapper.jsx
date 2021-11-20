import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';

export const Wrapper = ({ children, store }) => {
  return (
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  );
};
