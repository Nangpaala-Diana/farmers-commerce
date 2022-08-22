const Product = require("../models/products.model");

//create and save a new preduct
async function addProduct(req, res) {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const product = await Product.create(req.body);
  res.json({
    message: "product added successfully",
    data: product,
  });
}

//retrieve all products from the database

async function getAllProducts(req, res) {
  const products = await Product.find({});
  res.json({
    message: "Products retrieved successfully",
    count: products.length,
    data: products,
  });
}

//find a single product with id

async function getProductById(req, res) {
  const product = await Product.findById(req.params.id);
  res.json({
    message: "product retrieved successfully",
    data: product,
  });
}
//delete a product with the specified id in the request

async function deleteProduct(req, res) {
  await Product.findByIdAndDelete(req.params.id),
    res.json({
      messaga: "Product delete successfully",
    });
}

module.exports = {
  addProduct,

  getAllProducts,

  getProductById,
  deleteProduct,
};
