const express = require("express");
const router = express.Router();
const { User } = require("../model/users");
const authMW = require("../middleware/auth");
const { Order, validateOrder } = require("../model/orders");
const _ = require("lodash");

// new order
router.post("/", authMW, async (req, res) => {
  console.log(req.body);
  const { error } = validateOrder(req.body);
  if (error) {
    res.status(400).json(error.details[0].message);
    return;
  }
  let userDetails = await User.findById(req.user._id);
  console.log(userDetails);

  try {
    let order = await new Order({
      ...req.body,
      user_id: req.user._id,
      user_name: userDetails.name,
      region: userDetails.region,
      city: userDetails.city,
      phone: userDetails.phone,
    }).save();

    res.status(201).json(order);
  } catch (e) {
    console.log("error has happened here");
    res.status(400).json(e);
    return;
  }
});

// get all orders
router.get("/", async (req, res) => {
  try {
    res.status(200).json(await Order.find());
  } catch (e) {
    res.status(400).send(e.message);
    return;
  }
});

// admin confirm order
router.patch("/confirm/:id", authMW, async (req, res) => {
  try {
    let order = await Order.findById(req.params.id);
    console.log(req.body);
    order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(order);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

// get user orders
router.get("/:id", async (req, res) => {
  try {
    const orders = await Order.find({ user_id: req.params.id });
    console.log(orders);
    if (!orders) {
      res.status(404).send("no orders found");
      return;
    }
    res.status(200).json(orders);
    return;
  } catch (e) {
    res.status(400).send(e);
    return;
  }
});

module.exports = router;
