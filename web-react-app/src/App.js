import React from 'react';
import router from './router'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return router()
    }
}


export default App;