const token = require('../utils/token');


const cartInfo = (req, res) => {
    let resolveData = require("../json/cartInfo.json");

    res.json({
        state: true,
        resolveData
    })

    // let tokenData = req.headers.authorization;

    // let resolveCb = resolveData => {
    //     res.json({
    //         state: true,
    //         resolveData
    //     })
    // };
    // let rejectCb = () => {
    //     res.statusCode = 401;
    //     res.end()
    // };

    // token.tokenVerify(res, tokenData, 'vip', resolveCb, rejectCb, resolveData)

};

module.exports = {
    cartInfo
};