const { v4: uuidv4 } = require("uuid");

let orders = [];

exports.getOrders = (req, res) => res.json(orders);

exports.createOrder = (req, res) => {
  const order = { id: uuidv4(), ...req.body };
  orders.push(order);
  res.status(201).json(order);
};