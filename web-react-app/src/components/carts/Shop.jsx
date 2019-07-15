import React from "react";
import style from '../../assets/style/carts/shop.module.scss'
import Product from './Product'

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className={style.shop}>
                <div className={style.shop_tit}>
                    <div className={style.shop_check}></div>
                    <div className={style.shop_name}>九月的小铺</div>
                </div>
                <div className='product_item'>
                    <Product />
                </div>
            </div>
        )
    }
}

export default Shop;