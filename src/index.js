import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { theme } from 'theme';
import { GlobalStyle } from 'GlobalStyle';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

function renderApp() {
  root.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/PhoneBook">
          <App />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
}

renderApp();
