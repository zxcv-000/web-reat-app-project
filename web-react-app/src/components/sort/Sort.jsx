import React from "react";
import {Route} from "react-router-dom";
import style from '../../assets/style/sort/sort.module.scss'
import SearchBox from '../common/SearchBox'
import ShopGenre from './ShopGenre'


class Sort extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={style.sort}>
                <SearchBox history={this.props.history}/>
                <div className={style.sort_content}>
                    <ShopGenre/>
                    {
                        // console.log(this.props)
                    }
                    {/*{*/}
                    {/*this.props.routes.map((route, index) => {*/}
                    {/*if (route.exact) {*/}
                    {/*return <Route key={index} exact path={route.path} component={route.component} />*/}
                    {/*} else {*/}
                    {/*return <Route key={index} path={route.path} component={route.component} />*/}
                    {/*}*/}
                    {/*})*/}
                    {/*}*/}
                </div>
            </div>
        )
    }
}

export default Sort;