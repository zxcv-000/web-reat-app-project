import React from "react";
import style from '../../assets/style/carts/carts.module.scss'
import Title from './Title'
import Shop from './Shop'
import Account from './Account'

class Carts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className={style.cart}>
                <Title />
                <div className={style.cart_content}>
                    <Shop />
                    <Account/>
                </div>
            </div>
        )
    }

}

export default Carts;