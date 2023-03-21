import React from 'react';
import HomePage from '@/pages/home';
import Publish from '@/pages/publish';

const RouteConfig = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/publish',
        element: <Publish />
    }
];

export default RouteConfig