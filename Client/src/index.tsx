import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import ReduxLogger from 'redux-logger';
import { Provider } from 'react-redux';

const store = createStore(
  rootReducer,
  applyMiddleware(ReduxLogger)
)
ReactDOM.render(
  <Provider store = {store}>
  <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
