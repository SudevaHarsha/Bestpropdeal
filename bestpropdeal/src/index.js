import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from "react-helmet-async";
import { LikeProvider } from './components/Like/LikeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
if (process.env.NODE_ENV !== "development") {
  console.log = function() {};
  console.debug =function() {};
  console.info = function() {};
  console.warn = function() {};
 console.error = function() {};
}
root.render(
  <React.StrictMode>
    <LikeProvider>
      <BrowserRouter>
        <div className='BodyContainer'>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </div>
      </BrowserRouter>
    </LikeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
