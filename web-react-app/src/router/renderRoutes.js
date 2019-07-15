import React from 'react'
import renderRoutesMap from './renderRoutesMap'
import { Switch } from "react-router-dom";

/**
 * renderRoutes 渲染路由
 * @param  {array}      routes              路由列表
 * @param  {object}     extraProps  = {}    extra的属性
 * @param  {object}     switchProps = {}    switch的属性
 */
const renderRoutes = ({ routes, extraProps = {}, switchProps = {} }) => (
    <Switch {...switchProps}>
        {renderRoutesMap(routes)}
    </Switch>
);

export default renderRoutes