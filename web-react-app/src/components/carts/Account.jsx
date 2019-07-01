import React from "react";
import style from '../../assets/style/carts/account.module.scss'

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className={style.account}>
                <div className={style.check_box}>
                    <div className={style.all_check}></div>
                    <div>全选</div>
                </div>
                <div className={style.cart_count}>
                    <div> 合计:</div>
                    <div className={style.count_color}>￥0</div>
                    <div className={style.total}>结算：(0)</div>
                </div>
            </div>
        )
    }

}

export default Account;