let cars = require("../data/carDB");

function getCars(req, res) {
    res.json(cars);
}

module.exports = {
    getCars
};