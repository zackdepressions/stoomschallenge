import React from 'react'
import { PageComponent } from 'components';
import { lazy } from 'react';
import { RouteConfig } from 'react-router-config';
import { Redirect } from 'react-router-dom';

const RediHome: React.FC = () => <Redirect to="/buy/filling" />
const RediError: React.FC = () => <Redirect to="/errors/error-404" />


const routes: RouteConfig[] = [
    {
        path: '/',
        exact: true,
        component: RediHome
    },
    {
        path: '/errors/error-404',
        exact: true,
        component: lazy(() => import('./views/Error/Error'))
    },
    {
        path: '*',
        component: PageComponent,
        routes: [
            {
                path: '/buy/pasta',
                exact: true,
                component: lazy(() => import('./views/Steps/Pasta'))
            },
            {
                path: '/buy/size',
                exact: true,
                component: lazy(() => import('./views/Steps/Size'))
            },
            {
                path: '/buy/filling',
                exact: true,
                component: lazy(() => import('./views/Steps/Filling'))
            },
            {
                component: RediError
            }
        ]
    }
];

export default routes;