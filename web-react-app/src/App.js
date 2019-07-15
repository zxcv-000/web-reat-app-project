import React from 'react';
import router from './router'
import TabBar from './components/tabBar/TabBar'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <Router>
                    {router()}
                    {this.props.flag ? <TabBar /> : ''}
                </Router>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        flag: state.flagReducer.flag
    }
};

export default connect(mapStateToProps, null)(App);