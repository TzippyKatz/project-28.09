let cars = require("../data/carDB");

function getCars(req, res) {
    console.log("בקשה ל-cars התקבלה!");
    res.json(cars);
}

module.exports = {
    getCars
};