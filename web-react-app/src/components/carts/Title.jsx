import React from "react";
import style from '../../assets/style/carts/title.module.scss'

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className={style.header}>
                <div className={style.title_box}>
                    <div className={style.box1}>购物车 (<span className={style.countNum}>4</span>)</div>
                    <div className={style.box2}>编辑</div>
                </div>
            </div>
        )
    }

}

export default Title;