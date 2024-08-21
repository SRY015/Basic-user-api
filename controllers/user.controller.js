const { v4: uuidv4 } = require("uuid");

const User = require("../models/user.model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOneUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findOne({ id: userId });
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = new User({
      id: uuidv4(),
      name: req.body.name,
      age: Number(req.body.age),
    });
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User is created...",
      data: newUser,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findOne({ id: userId });
    user.name = req.body.name;
    user.age = Number(req.body.age);
    await user.save();
    res.status(200).json({
      success: true,
      message: "User is updated successfully !!",
      updatedUser: user,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    await User.deleteOne({ id: userId });
    res.status(200).json({
      success: true,
      message: "User deleted successfully !!",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
