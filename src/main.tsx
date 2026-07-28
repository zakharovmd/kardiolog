import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { initMetrika } from './lib/metrika';
import './styles.css';

initMetrika();

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element #root not found');
}

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
