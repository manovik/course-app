// import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useProvideAuth } from 'hooks';
import React from 'react';
import { Provider } from 'react-redux';
import { state } from './testMocks';

jest.mock('hooks', () => ({
  useProvideAuth: () => ({
    signOut: jest.fn(),
  }),
}));

const store = {
  getState: () => state,
  subscribe: jest.fn(),
  dispatch: jest.fn(),
};

jest.mock('context/authContext', () => ({
  useAuth: () => ({
    signOut: jest.fn(),
  }),
}));

const C = React.createContext();

const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <C.Provider value={auth}>{children}</C.Provider>;
};

export const Wrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <Router>
        <ProvideAuth>{children}</ProvideAuth>
      </Router>
    </Provider>
  );
};
