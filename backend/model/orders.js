const mongoose = require("mongoose");
const Joi = require("joi");
const _ = require("lodash");

const orderSchema = new mongoose.Schema({
  big: {
    type: String,
    maxlength: 255,
    default: "0",
  },
  small: {
    type: String,
    maxlength: 255,
    default: "0",
  },
  service: {
    type: String,
    maxlength: 255,
    default: "0",
  },
  paid: {
    type: String,
    maxlength: 255,
    default: "0",
  },
  notes: {
    type: String,
    maxlength: 255,
    default: "",
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  user_name: {
    type: String,
    ref: "User",
  },
  city: {
    type: String,
    ref: "User",
  },
  region: {
    type: String,
    ref: "User",
  },
  phone: {
    type: String,
    ref: "User",
  },
  orderStatus: {
    type: String,
    maxlength: 255,
    default: "בתהליכי אישור",
  },
  createdAt: { type: Number, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema, "orders");

function validateOrder(order) {
  const schema = Joi.object({
    big: Joi.string().max(255).allow(""),
    small: Joi.string().max(255).allow(""),
    service: Joi.string().max(255).allow(""),
    paid: Joi.string().max(255).allow(""),
    notes: Joi.string().max(255).allow(""),
    region: Joi.string().max(255).allow(""),
    city: Joi.string().max(255).allow(""),
  });

  return schema.validate(order);
}

module.exports = { Order, validateOrder };
