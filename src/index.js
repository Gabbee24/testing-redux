import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
// import userReducer from './features/User.jsx'
import { store } from './counter/store';

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
