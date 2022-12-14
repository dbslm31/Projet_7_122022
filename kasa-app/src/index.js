import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/App';
import './styles/Index.css';
import { BrowserRouter, Route } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


