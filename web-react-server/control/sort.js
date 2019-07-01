const nvClothes = (req, res) => {
    let resolveData = require("../json/nvClothes");
    res.json({
        state: true,
        resolveData
    })
};
const nvShoes = (req, res) => {
    let resolveData = require("../json/nvShoes");
    res.json({
        state: true,
        resolveData
    })
};
module.exports = {
    nvClothes,
    nvShoes
};