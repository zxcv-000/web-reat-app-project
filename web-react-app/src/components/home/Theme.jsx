import React from "react";
import style from '../../assets/style/home/theme.module.scss'
class Theme extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={style.theme}>
                <div className={style.theme_tit} style={{ backgroundImage: `url(${this.props.data.bg_url})`}}><span>约会主题</span></div>
                <div className={style.theme_footer}>
                    <ul>
                        {
                            this.props.data.img_url.map((item, index) => {
                                return (
                                    <li className={style.col_xs_4} key={index}><img src={item} alt="" /></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }

}

export default Theme;