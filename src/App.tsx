import React from 'react'
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { SnackbarProvider } from 'notistack';
import { renderRoutes } from 'react-router-config';
import routes from './route';

const history = createBrowserHistory();

function App() {
  return (
    <SnackbarProvider maxSnack={5}>
      <Router history={history}>
        {renderRoutes(routes)}
      </Router>
    </SnackbarProvider>
  )
}

export default App
