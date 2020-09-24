import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { globalReducers } from 'core/reducers';

// TODO pending combine globalReducers with pod reducers

const composeEnhancers =
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

export const store = createStore(
  globalReducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware(reduxThunk))
);
