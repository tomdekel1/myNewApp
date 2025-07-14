const mongoose = require("mongoose");

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
  createdAt: { type: Number, ref: "Order" },
  confirmedAt: { type: Number, default: Date.now },
});

const ConfirmedOrder = mongoose.model(
  "ConfirmedOrder",
  orderSchema,
  "ConfirmedOrders"
);

module.exports = { ConfirmedOrder };
