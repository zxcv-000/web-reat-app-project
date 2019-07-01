import React from 'react'
import {withRouter} from 'react-router-dom'

const OwnLinkItem = (props) => {
    let Tag = props.tag || 'a';

    let _class = props.className || '';
    let _activeClassName = props.activeClassName || 'active';
    let isActive = props.toObj ? props.location.pathname === props.to.pathname : props.location.pathname.startsWith(props.to);
    let className = (props.nav && isActive) ? _class + ' ' + _activeClassName : _class;
    return <Tag className={className} onClick={() => props.history.push(props.to)}> {props.children} </Tag>
};


export const OwnNavLink = props => {
    let Item = withRouter(OwnLinkItem);
    return (
        <Item {...props} nav/>
    )
};