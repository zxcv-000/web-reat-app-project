import React from "react";
import style from '../../assets/style/searchPage/searchPage.module.scss'

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={style.search_page}>
                <div className={style.search}>
                    <span className="iconfont icon-search"></span>
                    <input type="text" placeholder="搜索" />
                    <span className={style.cancel} onClick={() => this.cancelSearch()}>取消</span>
                </div>
                <div className={style.search_content}>
                    <div className={style.search_content_tit}>热门推荐</div>
                    <div className={style.search_content_tag}>
                        <ul>
                            <li>牛仔裤</li>
                            <li>T恤</li>
                            <li>针织衫</li>
                            <li>格子西服</li>
                            <li>小礼服</li>
                            <li>面膜</li>
                            <li>连衣裙</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    cancelSearch = () => {
        this.props.history.push('./sort')
    }
}

export default SearchPage;