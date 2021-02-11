import React, { Suspense } from 'react'
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { SnackbarProvider } from 'notistack';
import { renderRoutes } from 'react-router-config';
import { HelmetProvider } from 'react-helmet-async';
import routes from './route';

const history = createBrowserHistory();

function App() {
  return (
    <HelmetProvider>
      <Suspense fallback={null}>
        <SnackbarProvider maxSnack={5}>
          <Router history={history}>
            {renderRoutes(routes)}
          </Router>
        </SnackbarProvider>
      </Suspense>
    </HelmetProvider>
  )
}

export default App
