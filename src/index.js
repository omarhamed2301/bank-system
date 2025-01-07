import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import store from './Store';
import { Provider } from 'react-redux';

// store.dispatch({type: 'account/deposit', payload: 200})
// store.dispatch({type: 'customer/setNationalID', payload: "2812"})
// store.dispatch({type: 'account/requestLoan', payload: 5000})
// console.log(store.getState())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
