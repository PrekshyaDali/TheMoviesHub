import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import store from './redux/store.js';
import { DarkModeProvider } from './context/DarkModeContext.jsx';
import { Provider } from 'react-redux';
import AppRouter from './router/Router.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <DarkModeProvider>
      <AppRouter>
        <App />
      </AppRouter>
    </DarkModeProvider>
  </Provider>
);
