import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 


  <React.StrictMode>
    <Provider store={store}>
    <Auth0Provider
    domain="dev-2veuw7sc.us.auth0.com"
    clientId="5gtNuo2EnPLZA3lakGLaSs5tikMku6VT"
    redirectUri={window.location.origin}  >
    <App />
    </Auth0Provider>

    </Provider>
  </React.StrictMode>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
