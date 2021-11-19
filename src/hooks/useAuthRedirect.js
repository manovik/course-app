import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { APP } from 'appConstants';

import { getUser } from 'store/selectors';
import { useSelector } from 'react-redux';

export const useAuthRedirect = () => {
  const { isAuth } = useSelector(getUser);
  const history = useHistory();

  useEffect(() => {
    isAuth && history.push(APP.COURSES);
  }, [isAuth, history]);
};
