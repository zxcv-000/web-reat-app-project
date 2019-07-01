import React from "react";
import style from '../../assets/style/home/navigation.module.scss'
class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className={style.index_item}>
                <div className={style.index_item_top}>
                    <div>
                        <span className="iconfont icon-clothes"></span>
                        <span>衣服</span>
                    </div>
                    <div>
                        <span className="iconfont icon-shoe_bag"></span>
                        <span>鞋包</span>
                    </div>
                    <div>
                        <span className="iconfont icon-cosmetics"></span>
                        <span>美妆</span>
                    </div>
                    <div>
                        <span className="iconfont icon-ornaments"></span>
                        <span>饰品</span>
                    </div>
                </div>
                <div className={style.index_item_top}>
                    <div>
                        <span className="iconfont icon-woman"></span>
                        <span>女人</span>
                    </div>
                    <div>
                        <span className="iconfont icon-brand"></span>
                        <span>品牌</span>
                    </div>
                    <div>
                        <span className="iconfont icon-discount"></span>
                        <span>折扣</span>
                    </div>
                    <div>
                        <span className="iconfont icon-appointment"></span>
                        <span>约会</span>
                    </div>
                </div>
            </div>
        )
    }
}


export default Navigation;