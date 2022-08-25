const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    city: String,
    country: String,
    dateOfBirth: Date,
    gender: String,
    height: Number,
    identification: String,
    identificationType: String,
    state: String,
    weight: Number
  },
  {
    timestamps: true,
  }
);

userSchema.index({
  _id: 1,
  firstName: 1,
  lastName: 1,
  email: 1,
});

module.exports = userSchema;
