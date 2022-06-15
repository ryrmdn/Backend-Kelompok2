var express = require("express");
var router = express.Router();
var product = require("../controller/productController");
var verify = require("../middleware/isLogin");

/*users. */
router.use("/users", require("./users"));

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* PRODUCT CRUD */
router.get("/product", function (req, res, next) {
  res.status(200);
  res.send("Menampilkan semua product");
});

router.post("/product/add", verify.auth, product.addProduct);

module.exports = router;
