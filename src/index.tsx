import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/global.css'; // si tu as un CSS global

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
