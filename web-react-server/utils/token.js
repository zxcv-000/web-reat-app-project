const jwt = require("jsonwebtoken");

//创建一个token
const createToken = (tokenInfo, secret) => {
    return jwt.sign(tokenInfo, secret, {
        expiresIn: 60 * 60
    });
};

//验证token是否正确
const tokenVerify = (res, token, secret, resolveCb, rejectCb, resolveData) => {
    jwt.verify(token, secret, function (err, decoded) {
        if (err) {
            rejectCb();
        } else {
            resolveCb(resolveData);
        }
    });
};


module.exports = {
    createToken,
    tokenVerify
};