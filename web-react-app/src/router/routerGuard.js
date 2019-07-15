import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Loadable from 'react-loadable'
import renderRoutesMap from './renderRoutesMap'
import { connect } from 'react-redux'
import { change } from '../store/actions/flagAction'

class RouterGuard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        // let { history: { replace }, location } = this.props;
    }

    render() {
        let { component, routes = [] } = this.props;

        const LoadableComponent = Loadable({
            loader: () => import(`../components/${component}.jsx`),
            loading: () => (
                ''
            ),
            delay: 0
        });
        this.props.change(this.props.flag)
        return (
            <LoadableComponent {...this.props} renderRoutesMap={renderRoutesMap} routes={routes} />
        )
    }
}

const mapDispatchToProps = dispatch => ({
    change: (flag) => dispatch(change(flag))
});


export default withRouter(connect(null, mapDispatchToProps)(RouterGuard))