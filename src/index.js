import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'antd/dist/antd.min.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import AuthProvider from './context/AuthContext';
import { Elements } from '@stripe/react-stripe-js';
import { stripe } from './lib/stripe';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <AuthProvider>
          {/* <Provider store={store}> */}
          <Elements stripe={stripe}>
            <App />
          </Elements>
          {/* </Provider> */}
        </AuthProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
