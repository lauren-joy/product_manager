const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
    app.post("/api/product/new", ProductController.addNewProduct);
    app.get("/api/product/getall", ProductController.getAllProduct);
    app.get("/api/product/:id", ProductController.getOneProduct);
};