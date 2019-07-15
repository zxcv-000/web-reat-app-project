import React from 'react'
import RouterGuard from './routerGuard'
import { Route } from 'react-router-dom'


const renderRoutesMap = (routes) => (
    routes.map((route, index) => {
        if (route.exact) {
            return (
                <Route exact key={index} path={route.path} render={props => (
                    <RouterGuard {...route} {...props} flag={Boolean(route.flag)} />
                )}
                />
            )
        } else {
            return (
                <Route key={index} path={route.path} render={props => (
                    <RouterGuard {...route} {...props} flag={Boolean(route.flag)} />
                )}
                />
            )
        }
    })
);


export default renderRoutesMap;