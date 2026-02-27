const { v4: uuidv4 } = require("uuid");

let users = [];

exports.getUsers = (req, res) => res.json(users);

exports.createUser = (req, res) => {
  const user = { id: uuidv4(), ...req.body };
  users.push(user);
  res.status(201).json(user);
};