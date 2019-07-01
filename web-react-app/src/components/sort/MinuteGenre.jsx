import React from "react";
import style from '../../assets/style/sort/minuteGenre.module.scss'

class MinuteGenre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount() {
        
        console.log(this.props)
    }
    render() {
        return (
            <div className={style.minure_genre}>
                <div className={style.content}>
                    <div className={style.content_tit}>全部分类</div>
                    <div className={style.content_item}>
                        <div className={style.content_list}>
                            <div className={style.content_list_img}>
                                <img src="../../../img/content1_img1.png" alt="" />
                            </div>
                            <div className={style.content_list_name}>衬衫</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default MinuteGenre;