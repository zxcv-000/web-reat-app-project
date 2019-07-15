import React from "react";
import style from '../../assets/style/carts/title.module.scss'
import { connect } from 'react-redux'

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={style.header}>
                <div className={style.title_box}>
                    <div className={style.box1}>购物车 (<span className={style.countNum}>{this.props.count}</span>)</div>
                    <div className={style.box2}>编辑</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.cartsReducer.cartInfo && state.cartsReducer.cartInfo.count
    }
}
export default connect(mapStateToProps, null)(Title);