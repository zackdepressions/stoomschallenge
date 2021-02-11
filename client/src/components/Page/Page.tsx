/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import useRouter from '../../utils/useRouter';

const NODE_ENV = process.env.NODE_ENV;

const Page = (props: any) => {
    const { title, children } = props;

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
            {children}
        </div>
    );
};

export default Page;
