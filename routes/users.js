var express = require("express");
var router = express.Router();
const userControl = require("../controller/userController");
const auth = require("../middleware/auth");

/* GET users. */
router.get("/users", userControl.getUsers);
router.post("/register", userControl.Register);
router.post("/login", userControl.Login);

module.exports = router;
