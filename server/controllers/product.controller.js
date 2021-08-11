const Product = require ('../models/product.models');

const addNewProduct = (req, res) => {
    Product.create({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
    })
        .then((newProduct)=> res.json({newProduct: newProduct}))
        .catch((err) => res.json({errorMessage: err}));
}

module.exports = {
    addNewProduct,
}