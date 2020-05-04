import 'babel-polyfill'

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './state/store';
import { Provider } from 'react-redux';
import { fetchStatus } from './state/actionCreators';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
let spinner = document.getElementById('spinner');
spinner.parentNode.removeChild(spinner);


store.dispatch(fetchStatus())
  .then(() => console.log(store.getState()));

setTimeout(() => {
  debugger;
  console.log(store.getState());
}, 5000)