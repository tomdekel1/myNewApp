const mongoose = require("mongoose");
const Joi = require("joi");
const _ = require("lodash");

const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  subtitle: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  image: {
    url: { type: String, required: true, minlength: 6, maxlength: 1024 },
    alt: { type: String, maxlength: 1024 },
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  user_name: {
    type: String,
    ref: "User",
  },
  user_image: {
    type: String,
    ref: "User",
  },
  likes: {
    type: Array,
  },
  comments: {
    type: Array,
  },
  createdAt: { type: Number, default: Date.now },
});

const Card = mongoose.model("Card", cardSchema, "cards");

function validateCard(card) {
  const schema = Joi.object({
    title: Joi.string().min(2).max(255).required(),
    subtitle: Joi.string().min(2).max(255).required(),
    image: Joi.object({
      url: Joi.string().min(2).max(255).required(),
      alt: Joi.string().max(255).allow(""),
    }),
  });

  return schema.validate(card);
}

module.exports = { Card, validateCard };
