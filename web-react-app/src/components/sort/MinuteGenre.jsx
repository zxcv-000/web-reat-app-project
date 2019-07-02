import React from "react";
import $axios from '../../myAxios'
import style from '../../assets/style/sort/minuteGenre.module.scss'

class MinuteGenre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentWillMount() {
        $axios({
            method: "get",
            url: this.props.match.url
        }).then(({ data }) => {
            this.setState({
                data: data.resolveData
            });
        }).catch(error => {
            console.log(error)
        })
    }

    // 使用componentWillReceiveProps发送请求，首次reader渲染不会调用componentWillReceiveProps。
    componentWillReceiveProps(nextProps) {
        if (nextProps.match.url !== this.props.match.url) {
            $axios({
                method: "get",
                url: nextProps.match.url
            }).then(({ data }) => {
                this.setState({
                    data: data.resolveData
                });
            }).catch(error => {
                console.log(error)
            })
        }
    }

    render() {
        return (
            <div className={style.minute_genre}>
                <div className={style.content}>
                    <div className={style.content_tit}>全部分类</div>
                    <div className={style.content_item}>
                        {
                            this.state.data && this.state.data.map((item, index) => {
                                return (
                                    <div className={style.content_list} key={index}>
                                        <div className={style.content_list_img}>
                                            <img src={item.url} alt="" />
                                        </div>
                                        <div className={style.content_list_name}>{item.title}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default MinuteGenre;