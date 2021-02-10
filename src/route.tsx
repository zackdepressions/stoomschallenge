import React from 'react'
import { PageComponent } from 'components';
import { lazy } from 'react';
import { RouteConfig } from 'react-router-config';
import { Redirect } from 'react-router-dom';

const RediHome: React.FC = () => <Redirect to="/buy" />

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
                path: '/buy',
                exact: true,
                component: lazy(() => import('./views/Steps'))
            }
        ]
    }
];

export default routes;