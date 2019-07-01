import React from 'react'
import Swiper from 'swiper/dist/js/swiper.js'
import style from '../../assets/style/common/picMove.module.scss'

class PicMove extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img_url: props.img_url
        }
    }

    render() {
        return (
            <div className={style.pic_move}>
                <div className={["swiper-container", this.props.mountPoint].join(' ')}>
                    <div className="swiper-wrapper">
                        {
                            this.state.img_url && this.state.img_url.map((item, index) => {
                                return <div className="swiper-slide" key={index}><img src={item} className={style.pic}
                                    alt="" /></div>
                            })
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }


    componentDidMount() {
        new Swiper('.' + this.props.mountPoint, {
            autoplay: {
                delay: 2000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true
            }
        })
    }
}


export default PicMove