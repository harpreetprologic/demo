/**
 * Login user
 */

const joi = require("joi");
const User = require("../../models/user");


module.exports = async function (req, res) {
  try {
    const { body } = req;

    const user = (await User.findOneAndUpdate({ _id: req.user._id }, body, { new: true })).toObject();
    delete user['password'];
    delete user['__v'];
    delete user['createdAt'];
    delete user['updatedAt'];

    return res.json(user);
  } catch (error) {
    console.error("Error in user authentication", error);
    return res
      .status(500)
      .json({ message: error.message ?? "Error in user authentication" });
  }
};
