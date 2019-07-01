import React from "react";
import style from '../../assets/style/sort/shopGenre.module.scss'
import {OwnNavLink} from '../../utils/MyLink'

class ShopGenre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={[style.shop_genre, 'border-right'].join(' ')}>
                <ul>
                    <OwnNavLink activeClassName={style.li_active} to='/sort/nvClothes' tag='li'>女装</OwnNavLink>
                    <OwnNavLink activeClassName={style.li_active} to='/sort/nvShoes' tag='li'>女鞋</OwnNavLink>
                    <OwnNavLink activeClassName={style.li_active} to='/sort/b' tag='li'>衣服</OwnNavLink>
                    <OwnNavLink activeClassName={style.li_active} to='/sort/cs' tag='li'>衣服</OwnNavLink>
                    <OwnNavLink activeClassName={style.li_active} to='/sort/d' tag='li'>衣服</OwnNavLink>
                    <OwnNavLink activeClassName={style.li_active} to='/sort/e' tag='li'>衣服</OwnNavLink>
                    <OwnNavLink activeClassName={style.li_active} to='/sort/f' tag='li'>衣服</OwnNavLink>
                </ul>
            </div>
        )
    }

}

export default ShopGenre;