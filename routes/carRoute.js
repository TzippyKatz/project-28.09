const express = require("express");
const router = express.Router();
const carController = require("../controller/carController")
const users = [{ username: "admin", password: "1234" }];

router.get("/", carController.getCars);

module.exports = router;