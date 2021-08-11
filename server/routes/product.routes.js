const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
    app.post("/product/api", ProductController.addNewProduct);
};