import React from "react";
import style from '../../assets/style/personalCenter/personalCenter.module.scss'

class PersonalCenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className={style.personal_center}>
                <div className={style.title}>个人中心</div>
                <div className={style.header}>
                    <div className={style.photo}></div>
                    <span className="iconfont icon-arrowright"></span>
                </div>
                <div className={style.personal_content}>
                    <div className={style.content_top}>
                        <span>我的订单</span>
                        <div>全部订单<span className="iconfont icon-arrowright"></span></div>
                    </div>
                    <div className={style.content_next}>
                        <div>
                            <span className="iconfont icon-unpaid"></span>
                            <div>待支付</div>
                        </div>
                        <div>
                            <span className="iconfont icon-delivery"></span>
                            <div>待发货</div>
                        </div>
                        <div>
                            <span className="iconfont icon-unreceived"></span>
                            <div>待收货</div>
                        </div>
                        <div>
                            <span className="iconfont icon-completed"></span>
                            <div>已完成</div>
                        </div>
                    </div>
                </div>
                <div className={style.personal_ul}>
                    <ul>
                        <li>
                            <span>退货/售后</span>
                            <span className="iconfont icon-arrowright"></span>
                        </li>
                        <li>
                            <span>优惠券</span>
                            <span className="iconfont icon-arrowright"></span>
                        </li>
                        <li>
                            <span>售后服务</span>
                            <span className="iconfont icon-arrowright"></span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default PersonalCenter;