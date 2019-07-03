import React from 'react'
import style from '../../assets/style/home/home.module.scss'
import PicMove from '../common/PicMove'
import Navigation from './Navigation'
import NewSlider from './NewSlider'
import Theme from './Theme'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            img_url: ['./../../img/1.jpg', './../../img/2.jpg', './../../img/3.jpg'],
            new_slider_data: [
                {
                    url: '../../../img/item1.jpg',
                    title: '2019个性时尚戒指',
                    price: '￥200'
                },
                {
                    url: '../../../img/item2.jpg',
                    title: '2019个性时尚戒指',
                    price: '￥200'
                },
                {
                    url: '../../../img/item3.jpg',
                    title: '2019个性时尚戒指',
                    price: '￥200'
                },
                {
                    url: '../../../img/item4.jpg',
                    title: '2019个性时尚戒指',
                    price: '￥200'
                },
                {
                    url: '../../../img/item5.jpg',
                    title: '2019个性时尚戒指',
                    price: '￥200'
                },
                {
                    url: '../../../img/item6.jpg',
                    title: '2019个性时尚戒指',
                    price: '￥200'
                }
            ],
            theme_data: {
                img_url: ['../../../img/img1.jpg', '../../../img/img2.jpg', '../../../img/img3.jpg'],
                bg_url: '../../../img/bag_bg.jpg'
            }

        }

    }

    render() {
        return (
            <div className={style.home}>
                <div className={style.banner}>
                    <PicMove mountPoint='home-swiper' img_url={this.state.img_url} />
                </div>
                <Navigation />
                <NewSlider mountPoint='slider_swiper' data={this.state.new_slider_data} />
                <Theme data={this.state.theme_data} />

                <div onClick={() => this.go()}>商品详情</div>
            </div>
        )
    }

    go = () => {
        this.props.history.push('/details/1')
    }
}


export default Home