import React from "react"
import style from '../../assets/style/details/details.module.scss'
import PicMove from '../common/PicMove'
import Footer from './Footer'

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

    render() {
        return (
            <div className={style.details}>
                <div className={style.title}>商品详情</div>
                <div className={style.banner}>
                    <PicMove mountPoint='details_banner' img_url={this.state.img_url}/>
                </div>
                <div className={style.main}>
                    <div className={style.product_info}>
                        <div className={style.product_price}>￥300</div>
                        <div className={style.product_name}>2019年春季新款女装流苏复古长 仙女蕾丝中长款公主裙子 连衣袖</div>
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
                                <li> 商品详情</li>
                                <li> 商品规格</li>
                                <li> 售后说明</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}


export default Details