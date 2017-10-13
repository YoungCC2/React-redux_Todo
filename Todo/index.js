import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './src/reducers';
import App from './src/components/App';

const store = createStore(todoApp);
let elem = document.getElementById('root');

let sc = {
    add:'ddd'
}
console.log(sc);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  elem
);