import React from "react";
import Swiper from 'swiper/dist/js/swiper.js'
import style from '../../assets/style/home/newSlider.module.scss'

class NewSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className={style.index_slider}>
                <div className={style.slider_tit}>最新单品</div>
                <div className={["swiper-container", this.props.mountPoint].join(' ')}>
                    <div className="swiper-wrapper">
                        {
                            this.props.data && this.props.data.map((item, index) => {
                                return (
                                    <div className="swiper-slide" key={index}>
                                        <div className={style.slider_item}>
                                            <div className={style.img_box}><img src={item.url} alt=""></img></div>
                                            <div className={[style.slider_item_tit, 'ehn'].join(' ')}>{item.title}</div>
                                            <div className={style.slider_item_price}>{item.price}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        new Swiper('.' + this.props.mountPoint, {
            slidesPerView: 'auto',
            spaceBetween: 10,
        });
    }
}


export default NewSlider;