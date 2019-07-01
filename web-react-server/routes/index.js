var express = require('express');
var router = express.Router();
var judge = require("../control/judge");
var cartInfo = require('../control/cartInfo');

router.post('/register', judge.register);

router.post("/login", judge.login);

router.post('/cartInfo', cartInfo.cartInfo);


module.exports = router;