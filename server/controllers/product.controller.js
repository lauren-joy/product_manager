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
  Product.findOne({ _id: req.params.id })
    .then((product) => res.json(product))
    .catch((err) => {
      res.status(400).json(err);
    });
};

const updateOne = (req, res) => {
  const { title, price, description } = req.body;
  Product.findOneAndUpdate(
    { _id: req.params.id },
    { title, price, description },
    { new: true, useFindAndModify: true }
  )
    .then((product) => res.json(product))
    .catch((err) => {
      res.status(400).json(err);
    });
};

const deleteOne = (req, res) => {
  Product.deleteOne({ _id: req.params.id})
    .then((deleteConfim) => res.json(deleteConfim))
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = {
  addNewProduct,
  getAllProduct,
  getOneProduct,
  updateOne,
  deleteOne,
};
