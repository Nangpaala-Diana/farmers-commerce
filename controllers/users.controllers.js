//create a user account
const User = require("../models/users.model");

const createAcount = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ sucess: true, data: user });
  } catch (error) {
    res.json({ sucess: false, data: error });
  }
};

//login a user
const loginUser = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    res.json({
      sucess: true,
      data: user,
    });
  } else {
    res.json({
      success: false,
      data: "User Not found",
    });
  }
};
module.exports = {
  createAcount,
  loginUser,
};
