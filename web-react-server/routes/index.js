var express = require('express');
var router = express.Router();
var judge = require("../control/judge");
var cartInfo = require('../control/cartInfo').cartInfo;
var sort = require('../control/sort');

router.post('/register', judge.register);

router.post("/login", judge.login);

router.get('/cartInfo', cartInfo);

router.get('/sort/nvClothes', sort.nvClothes);
router.get('/sort/nvShoes', sort.nvShoes);

module.exports = router;