import React from "react"
import style from '../../assets/style/details/footer.module.scss'


class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={style.footer}>
                <div className={style.detail_icon}>
                    <div className={style.detail_index}>
                        <div><span className="iconfont icon-home"></span></div>
                        <div>首页</div>
                    </div>
                    <div className={style.detail_index}>
                        <div><span className="iconfont icon-cart"></span></div>
                        <div>购物车</div>
                    </div>
                    <div className={style.detail_index}>
                        <div><span className="iconfont icon-mine"></span></div>
                        <div>收藏</div>
                    </div>
                </div>
                <div className={style.detail_group}>
                    <div className={style.detail_add}>加入购物车</div>
                    <div className={style.detail_buy}>立即购买</div>
                </div>
            </div>
        )
    }
}

export default Footer;