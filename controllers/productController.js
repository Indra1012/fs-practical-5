const { v4: uuidv4 } = require("uuid");

let products = [];

exports.getProducts = (req, res) => {
  res.json(products);
};

exports.createProduct = (req, res) => {
  const newProduct = { id: uuidv4(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

exports.updateProduct = (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });

  Object.assign(product, req.body);
  res.json(product);
};

exports.deleteProduct = (req, res) => {
  products = products.filter(p => p.id !== req.params.id);
  res.json({ message: "Product deleted" });
};