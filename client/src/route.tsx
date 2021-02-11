import React from 'react'
import { PageComponent } from 'components';
import { lazy } from 'react';
import { RouteConfig } from 'react-router-config';
import { Redirect } from 'react-router-dom';

const RediHome: React.FC = () => <Redirect to="/buy/pasta" />

const routes: RouteConfig[] = [
    {
        path: '/',
        exact: true,
        component: RediHome
    },
    {
        path: '*',
        component: PageComponent,
        routes: [
            {
                path: '/buy/pasta',
                exact: true,
                component: lazy(() => import('./views/Steps'))
            },
            {
                path: '/buy/size',
                exact: true,
                component: lazy(() => import('./views/Steps'))
            },
        ]
    }
];

export default routes;