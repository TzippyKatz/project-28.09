const express = require("express");
const router = express.Router();
const carController = require("../controller/carController");
const { authCheck } = require("../middleware/isLoggedin");

const users = [{ username: "admin", password: "1234" }];

router.get("/", authCheck, carController.getCars);

module.exports = router;