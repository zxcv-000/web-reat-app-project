import React from "react";
import style from '../../assets/style/carts/carts.module.scss'
import Title from './Title'
import Shop from './Shop'
import Account from './Account'
import { connect } from 'react-redux'
import { getData } from '../../store/actions/cartsAction'

class Carts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        this.props.getData()
    }

    render() {
        return (
            <div className={style.cart}>
                <Title />
                <div className={style.cart_content}>
                    <Shop />
                    <Account />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getData: () => getData(dispatch)
});
export default connect(null, mapDispatchToProps)(Carts);
