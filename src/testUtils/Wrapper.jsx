import { BrowserRouter as Router } from 'react-router-dom';
import { useProvideAuth } from 'hooks';
import React from 'react';
import { Provider } from 'react-redux';

const C = React.createContext();

const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <C.Provider value={auth}>{children}</C.Provider>;
};

export const Wrapper = ({ children, store }) => {
  return (
    <Provider store={store}>
      <Router>
        <ProvideAuth>{children}</ProvideAuth>
      </Router>
    </Provider>
  );
};
