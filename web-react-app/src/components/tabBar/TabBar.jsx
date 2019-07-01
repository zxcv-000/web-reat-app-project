import React from "react"
import style from '../../assets/style/tabBar/tabBar.module.scss'
import { OwnNavLink } from '../../utils/MyLink'

class TabBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={[style.footer, 'border-top'].join(' ')}>
                <OwnNavLink className="home" activeClassName={style.active} to='/home' tag='div'>
                    <div className={style.tab_box}>
                        <div><span className="iconfont icon-home"></span></div>
                        <div className={style.foot_tit}>首页</div>
                    </div>
                </OwnNavLink>
                <OwnNavLink className="sort" activeClassName={style.active} to='/sort/clothes' tag='div'>
                    <div className={style.tab_box}>
                        <div><span className="iconfont icon-sort"></span></div>
                        <div className={style.foot_tit}>分类</div>
                    </div>
                </OwnNavLink>
                <OwnNavLink className="buy" activeClassName={style.active} to='/carts' tag='div'>
                    <div className={style.tab_box}>
                        <div><span className="iconfont icon-cart"></span></div>
                        <div className={style.foot_tit}>购物车</div>
                    </div>
                </OwnNavLink>
                <OwnNavLink className="stage" activeClassName={style.active} to='/personalCenter' tag='div'>
                    <div className={style.tab_box}>
                        <div><span className="iconfont icon-mine"></span></div>
                        <div className={style.foot_tit}>我的</div>
                    </div>
                </OwnNavLink>
            </div>
        )
    }

}

export default TabBar