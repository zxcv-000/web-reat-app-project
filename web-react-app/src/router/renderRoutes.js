import React from 'react'
import renderRoutesMap from './renderRoutesMap'
import {BrowserRouter as Router, Switch} from "react-router-dom";

/**
 * renderRoutes 渲染路由
 * @param  {array}      routes              路由列表
 * @param  {object}     extraProps  = {}    extra的属性
 * @param  {object}     switchProps = {}    switch的属性
 */
const renderRoutes = ({routes, extraProps = {}, switchProps = {}}) => (
    <Router>
        <Switch {...switchProps}>
            {renderRoutesMap(routes)}
        </Switch>
    </Router>
);

export default renderRoutes