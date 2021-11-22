import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';

export const Wrapper = ({ children, store }) => {
  const history = ['/'];
  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={history}>{children}</MemoryRouter>
    </Provider>
  );
};
