import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import App from './containers/App/App';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store = {store}>
   <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
