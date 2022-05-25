import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { theme } from 'assets/styles/theme';
import ResetStyle from 'assets/styles/Reset';
import GlobalStyle from 'assets/styles/Global';

import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ResetStyle />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
