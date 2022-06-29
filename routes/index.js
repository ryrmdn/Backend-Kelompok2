var express = require("express");
var router = express.Router();
var product = require("../controller/productController");
var verify = require("../middleware/isLogin");
const multer = require("../middleware/multer");

/*users. */
router.use("/users", require("./users"));

/* transaction */
router.use("/transaction", require("./transaction"));

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
router.post("/product/add", verify.auth, multer.single("product_img"), product.addProduct);
router.post("/product/:id", verify.auth, multer.single("product_img"), product.editProduct)
router.delete("/product/:id", verify.auth, product.DeleteProduct);

module.exports = router;
