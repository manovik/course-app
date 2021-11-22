import { render } from '@testing-library/react';
import { Header } from '../Header';
import { Wrapper, state, testIds } from 'testUtils';

jest.mock('context/authContext', () => ({
  useAuth: () => ({
    signOut: jest.fn(),
  }),
}));

const store = {
  getState: () => state,
  subscribe: jest.fn(),
  dispatch: jest.fn(),
};

describe('Testing Header', () => {
  let renderResult = () =>
    render(
      <Wrapper store={store}>
        <Header></Header>
      </Wrapper>
    );

  it('should be displayed', async () => {
    const { findByTestId } = renderResult();
    const headerElement = await findByTestId(testIds.HEADER);

    expect(headerElement).toBeTruthy();
  });

  it('should be rendered with name', () => {
    const { queryByText } = renderResult();

    expect(queryByText(state.user.name)).toBeInTheDocument();
  });

  it('should be rendered with logo', () => {
    const { queryByRole } = renderResult();
    const logo = queryByRole('img');

    expect(logo.alt).toEqual('Logo');
  });
});
