import React from "react";
import style from "../../assets/style/authentication/login.module.scss"

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={style.login}>
                <div className={style.header}>
                    <div className={style.close}>
                        <img src="../../../img/close.png" alt=""/>
                    </div>
                    <span>登录</span>
                </div>
                <div className={style.login_form}>
                    <div className={style.user_name}>
                        <input type="text" placeholder="请输入用户名/手机号/邮箱"/>
                    </div>
                    <div className={style.pass_word}>
                        <input type="password" placeholder="请输入密码"/>
                        <div className={style.showPass}>
                            <img src="../../../img/biyan.png" alt=""/>
                        </div>
                    </div>
                    <div className={style.forget_pd}>
                        <div className="forget_pd_to">忘记密码?</div>
                    </div>
                    <div className={[style.btn, style.btn_gry].join(' ')}>登录</div>
                </div>
                <div className={style.link_to}>
                    <span className={style.ins}>短信验证码登录</span>
                    <div className={style.register}>注册</div>
                </div>
                <div className={style.other_login}>
                    <div className={style.title}>
                        <span className={style.line}></span>
                        <span className={style.text}>使用社交账号登录</span>
                        <span className={style.line}></span>
                    </div>
                    <div className={style.icon}>
                        <div className={style.icon_link}>
                            <img src="../../../img/QQ.png" alt=""/>
                        </div>
                        <div className={style.icon_link}>
                            <img src="../../../img/WB.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Login;