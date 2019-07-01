import React from "react";
import style from '../../assets/style/authentication/register.module.scss'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={style.register}>
                <div className={style.header}>
                    <div className={style.back}>
                        <img src="../../../img/back.png" alt=""/>
                    </div>
                    <span>注册</span>
                </div>
                <div className={style.register_form}>
                    <div className={style.phone}>
                        <div className={style.areaCode}>+86</div>
                        <input type="tel" placeholder="请输入手机号"/>
                    </div>
                    <div className={style.code}>
                        <input type="password" placeholder="请输入短信验证码"/>
                        <div className={style.send}>获取验证码</div>
                    </div>
                    <div className={[style.btn, style.btn_gry].join(' ')}>注册</div>
                </div>
                <div className={style.tip}>
                    <span>   注册即表示您同意</span>
                    <span className={style.red}>《服务协议》</span>
                </div>
            </div>
        )
    }
}

export default Register;