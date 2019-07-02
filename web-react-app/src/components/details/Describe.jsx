import React from "react"
import style from '../../assets/style/details/describe.module.scss'


class Describe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={style.describe}>
                <img src="" alt=""/>
                <img src="" alt=""/>
                <img src="" alt=""/>
            </div>
        )
    }
}

export default Describe;