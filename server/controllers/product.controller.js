const Product = require("../models/product.models");

const addNewProduct = (req, res) => {
  Product.create({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
  })
    .then((newProduct) => res.json(newProduct))
    .catch((err) => res.json({ errorMessage: err }));
};

const getAllProduct = (req, res) => {
  Product.find({})
    .then((allProducts) => res.json(allProducts))
    .catch((err) => res.json({ errorMessage: err }));
};

const getOneProduct = (req, res) => {
  Product.findOne({_id:req.params.id})
    .then (product => res.json(product))
}

module.exports = {
  addNewProduct,
  getAllProduct,
  getOneProduct
};
