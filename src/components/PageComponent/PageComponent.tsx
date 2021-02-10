/* eslint-disable no-undef */
import React, { useEffect, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { renderRoutes } from 'react-router-config';
import useRouter from '../../utils/useRouter';
import { LinearProgress } from '@material-ui/core';

const NODE_ENV = process.env.NODE_ENV;

const PageComponent = (props: any) => {
    const { title, route } = props;

    const router = useRouter();

    useEffect(() => {
        if (NODE_ENV !== 'production') {
            return;
        }
    }, [title, router]);

    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Suspense fallback={<LinearProgress />}>
                {renderRoutes(route.routes)}
            </Suspense>
        </div>
    );
};

export default PageComponent;
