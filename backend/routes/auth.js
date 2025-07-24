const express = require("express");
const router = express.Router();
const Joi = require("joi");
const bcrypt = require("bcrypt");
const { User } = require("../model/users");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

router.post("/", async (req, res) => {
  // signin
  // validate user's input
  const { error } = validateUser(req.body);
  if (error) {
    res.status(400).json(error.message);
    return;
  }
  //   validate system
  const user = await User.findOne({ phone: req.body.phone });
  if (!user) {
    res.status(400).json("טלפון או סיסמה שגויים");
    return;
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    res.status(400).send("טלפון או סיסמה שגויים");
    return;
  }

  const token = jwt.sign(
    { _id: user._id, isAdmin: user.isAdmin },
    config.jwtKey
  );

  res.status(201).json({ token });
});

function validateUser(user) {
  const schema = Joi.object({
    phone: Joi.string().min(9).max(11).required(),
    password: Joi.string().min(6).max(1024).required(),
  });
  return schema.validate(user);
}

module.exports = router;
