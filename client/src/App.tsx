import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { renderRoutes } from 'react-router-config';
import { HelmetProvider } from 'react-helmet-async';
import routes from './route';

function App() {
  return (
    <HelmetProvider>
      <Suspense fallback={null}>
        <SnackbarProvider maxSnack={5}>
          <Router>
            {renderRoutes(routes)}
          </Router>
        </SnackbarProvider>
      </Suspense>
    </HelmetProvider>
  )
}

export default App
