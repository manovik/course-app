import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { APP } from 'utils/appRoutes';

import { useAuth } from 'context/authContext';

export const useAuthRedirect = () => {
  const { isAuth } = useAuth();
  const history = useHistory();

  useEffect(() => {
    isAuth && history.push(APP.COURSES);
  }, [isAuth, history]);
};
