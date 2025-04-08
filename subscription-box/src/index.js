import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from 'react-dom/client' instead of 'react-dom'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create the root with `createRoot()`
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
