const express = require("express");
const router = express.Router();
const { User } = require("../model/users");
const authMW = require("../middleware/auth");
const { Order, validateOrder } = require("../model/orders");
const { DeletedOrder } = require("../model/deletedOrders");
const _ = require("lodash");
const validateAdmin = require("../middleware/validateAdmin");
const { ConfirmedOrder } = require("../model/confirmedOrders");

// admin confirm order
router.patch("/confirm/:id", authMW, validateAdmin, async (req, res) => {
  try {
    let order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    order = await Order.findByIdAndDelete(req.params.id);

    await new ConfirmedOrder({
      big: order.big,
      small: order.small,
      service: order.service,
      paid: order.paid,
      notes: order.notes,
      user_id: order.user_id,
      user_name: order.user_name,
      city: order.city,
      region: order.region,
      phone: order.phone,
      orderStatus: order.orderStatus,
      createdAt: order.createdAt,
    }).save();
    res.status(200).json(order);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

// admin order delivered
router.post("/delivered/:id", authMW, validateAdmin, async (req, res) => {
  try {
    let order = await ConfirmedOrder.findByIdAndDelete(req.params.id);

    await new DeletedOrder({
      big: order.big,
      small: order.small,
      service: order.service,
      paid: order.paid,
      notes: order.notes,
      user_id: order.user_id,
      user_name: order.user_name,
      city: order.city,
      region: order.region,
      phone: order.phone,
      orderStatus: order.orderStatus,
      createdAt: order.createdAt,
    }).save();
    res.status(200).json(order);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

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
router.get("/deleted", async (req, res) => {
  try {
    res.status(200).json(await DeletedOrder.find());
  } catch (e) {
    res.status(400).send(e.message);
    return;
  }
});
router.get("/confirmed", async (req, res) => {
  try {
    res.status(200).json(await ConfirmedOrder.find());
  } catch (e) {
    res.status(400).send(e.message);
    return;
  }
});
router.get("/", async (req, res) => {
  try {
    res.status(200).json(await Order.find());
  } catch (e) {
    res.status(400).send(e.message);
    return;
  }
});

// get user orders
router.get("/:id", async (req, res) => {
  try {
    const deletedOrders = await DeletedOrder.find({ user_id: req.params.id });
    const confirmedOrders = await ConfirmedOrder.find({
      user_id: req.params.id,
    });
    const orders = await Order.find({ user_id: req.params.id });
    const allOrders = [...deletedOrders, ...confirmedOrders, ...orders];
    if (!orders && !deletedOrders && !confirmedOrders) {
      res.status(404).send("no orders found");
      return;
    }
    res.status(200).json(allOrders);
    return;
  } catch (e) {
    res.status(400).send(e);
    return;
  }
});

// delete order
router.delete("/:id", authMW, validateAdmin, async (req, res) => {
  let order;
  try {
    order = await Order.findByIdAndDelete(req.params.id);
    await new DeletedOrder({
      big: order.big,
      small: order.small,
      service: order.service,
      paid: order.paid,
      notes: order.notes,
      user_id: order.user_id,
      user_name: order.user_name,
      city: order.city,
      region: order.region,
      phone: order.phone,
      orderStatus: "בוטל",
      createdAt: order.createdAt,
    }).save();
    res.status(200).json(order);
    return;
  } catch (e) {
    res.status(400).send(e.message);
    return;
  }
});

module.exports = router;
