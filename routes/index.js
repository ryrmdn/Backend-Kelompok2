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
router.get("/product", product.getProduct)
router.get("/product/:userid", product.getUserProduct)
router.get("/product/info/:id", product.getInfoProduct)
router.post("/product/filterByName", product.getProductByName)
router.post("/product/filterByCategory", product.getProductByCategory)
router.post("/product/add", verify.auth, product.addProduct);
router.post("/product/:id", verify.auth, product.editProduct)

module.exports = router;
