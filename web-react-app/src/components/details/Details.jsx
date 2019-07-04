import React from "react"
import style from '../../assets/style/details/details.module.scss'
import PicMove from '../common/PicMove'
import Footer from './Footer'
import {OwnNavLink} from '../../utils/MyLink'

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img_url: [
                '../../../img/good1.jpg',
                '../../../img/good2.jpg',
                '../../../img/good3.jpg',
                '../../../img/good4.jpg',
                '../../../img/good5.jpg',
            ]
        }
    }

    back = () => {
        this.props.history.goBack();
    };

    render() {
        return (
            <div className={style.details}>
                <div className={style.back_icon} onClick={() => this.back()}></div>
                <div className={style.banner}>
                    <PicMove mountPoint='details_banner' img_url={this.state.img_url}/>
                </div>
                <div className={style.main}>
                    <div className={style.product_info}>
                        <div className={style.product_price}>￥300</div>
                        <div className={style.product_name}>2019年春季新款女装流苏复古 仙女蕾丝中长款公主裙</div>
                    </div>
                    <div className={style.details_next}>
                        <div className={style.next_list}>
                            <div className={style.red_circle}></div>
                            <div className={'next_title'}>免运费</div>
                        </div>
                        <div className={style.next_list}>
                            <div className={style.red_circle}></div>
                            <div className={'next_title'}>正品保障</div>
                        </div>
                        <div className={style.next_list}>
                            <div className={style.red_circle}></div>
                            <div className={'next_title'}>七天退款</div>
                        </div>
                    </div>
                    <div className={style.details_content}>
                        <div className={style.details_tab}>
                            <ul>
                                <OwnNavLink activeClassName='li_active' to='/details/1/describe' tag='li'
                                            traceless> 商品详情</OwnNavLink>
                                <OwnNavLink activeClassName='li_active' to='/details/1/specs' tag='li'
                                            traceless> 商品规格</OwnNavLink>
                                <OwnNavLink activeClassName='li_active' to='/details/1/explain' tag='li'
                                            traceless> 售后说明</OwnNavLink>
                            </ul>
                            {
                                this.props.renderRoutesMap(this.props.routes)
                            }
                            {/*{*/}
                            {/*this.props.routes && this.props.routes.map((route, index) => {*/}
                            {/*if (route.exact) {*/}
                            {/*return <Route exact key={index} path={this.props.match.path + route.path}*/}
                            {/*component={route.component}/>*/}
                            {/*} else {*/}
                            {/*return <Route key={index} path={this.props.match.path + route.path}*/}
                            {/*component={route.component}/>*/}
                            {/*}*/}
                            {/*})*/}
                            {/*}*/}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}


export default Details