import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { APP } from 'utils/appRoutes';

export const useCheckIfUserLoggedIn = (isLoggedIn) => {
  const history = useHistory();
  useEffect(() => {
    !isLoggedIn && history.push(APP.LOGIN);
  }, [history, isLoggedIn]);
};
