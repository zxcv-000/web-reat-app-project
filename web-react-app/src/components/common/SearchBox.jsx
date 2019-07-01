import React from "react";
import style from '../../assets/style/common/searchBox.module.scss'

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={[style.search, 'border-bottom'].join(' ')} onClick={() => this.goSearch()}>
                <input type="text" style={{ backgroundImage: "url('../../../img/search.svg')" }} placeholder="搜索" readOnly />
            </div>
        )
    }

    goSearch = () => {
        this.props.history.push('/searchPage')
    }
}

export default SearchBox;