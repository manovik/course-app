import { combineReducers, createStore, compose } from 'redux';
import { authorsReducer } from './authors/reducer';
import { coursesReducer } from './courses/reducer';
import { userReducer } from './user/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  authors: authorsReducer,
  courses: coursesReducer,
  user: userReducer,
});

export const store = createStore(rootReducer, composeEnhancers());
