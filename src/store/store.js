import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { authorsReducer } from './authors/reducer';
import { coursesReducer } from './courses/reducer';
import { userReducer } from './user/reducer';
import ReduxThunk from 'redux-thunk';
import { appState } from './appState/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  authors: authorsReducer,
  courses: coursesReducer,
  user: userReducer,
  app: appState,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk))
);
