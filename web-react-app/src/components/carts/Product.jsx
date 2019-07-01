import React from "react";
import style from '../../assets/style/carts/product.module.scss'

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={style.product}>
                <div className={style.product_store}>
                    <div className={style.product_check}></div>
                    <img src="img/img3.jpg" alt=""/>
                    <div className={style.product_property}>
                        <div className={style.product_name}>长裙女连衣裙打底裙气质百搭 中长款吊带2019春夏新款韩版复古格子群</div>
                        <div className={style.product_size}><span>红色;S</span></div>
                        <div className={style.product_footer}>
                            <div className={style.product_price}>￥<span>198</span></div>
                            <div className={style.product_count}>
                                <span>-</span>
                                <input type="text" value="1" name="num" readOnly/>
                                <span>+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;