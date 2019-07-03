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
                <img src='../../../img/good1.jpg' alt="" />
                <img src='../../../img/good2.jpg' alt="" />
                <img src='../../../img/good3.jpg' alt="" />
                <img src='../../../img/good4.jpg' alt="" />
            </div>
        )
    }
}

export default Describe;