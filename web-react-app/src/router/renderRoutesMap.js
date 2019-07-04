import React from 'react'
import RouterGuard from './routerGuard'
import {Route} from 'react-router-dom'

const renderRoutesMap = (routes) => (
    routes.map((route, index) => {
        if (route.exact) {
            if(route.aa){
                return (
                    <Route exact  key={index} path={route.path} render={props => (
                        <RouterGuard {...route} {...props} aa/>
                    )}
                    />
                )
            }else{
                return (
                    <Route exact key={index} path={route.path} render={props => (
                        <RouterGuard {...route} {...props} />
                    )}
                    />
                )
            }

        } else {
            return (
                <Route key={index} path={route.path} render={props => (
                    <RouterGuard {...route} {...props} />
                )}
                />
            )
        }
    })
);

export default renderRoutesMap