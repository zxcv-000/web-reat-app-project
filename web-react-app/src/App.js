import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from './router'
import TabBar from './components/tabBar/TabBar';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Router>
                {
                    routes.map((route, index) => {
                        if (route.exact) {
                            return <Route key={index} exact path={route.path}
                                render={props => (
                                    <route.component {...props} routes={route.routes} />
                                )}
                            />
                        } else {
                            return <Route key={index} path={route.path}
                                render={props => (
                                    <route.component {...props} routes={route.routes} />
                                )}
                            />
                        }
                    })
                }
                <TabBar />
            </Router>


        )
    }
}


export default App;