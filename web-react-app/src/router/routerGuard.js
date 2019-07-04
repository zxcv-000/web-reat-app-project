import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Loadable from 'react-loadable'
import renderRoutesMap from './renderRoutesMap'

import TabBar from '../components/tabBar/TabBar'

class RouterGuard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        let {history: {replace}, location} = this.props;
        console.log(this.props)

    }

    render() {
        let {component, routes = []} = this.props;

        const LoadableComponent = Loadable({
            loader: () => import(`../components/${component}.jsx`),
            loading: () => (
                ''
            ),
            delay: 0
        });
        if(this.props.aa){
        return (
            <>
                <LoadableComponent {...this.props} renderRoutesMap={renderRoutesMap} routes={routes}/>
                <TabBar/>
            </>
        )}else{
            return (
                <>
                    <LoadableComponent {...this.props} renderRoutesMap={renderRoutesMap} routes={routes}/>
                </>
            )
        }
    }
}

export default withRouter(RouterGuard)