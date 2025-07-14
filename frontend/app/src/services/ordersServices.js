import httpService from "./httpServices";
import usersService from "./usersServices";

export const createOrder = async (order) => {
  usersService.refreshToken();
  const res = await httpService.post("/api/orders", order);
  return res;
};

async function getAllOrders() {
  try {
    const orders = await httpService.get("/api/orders");
    return orders;
  } catch (error) {
    console.log(error);
    return error;
  }
}
async function getAllDeletedOrders() {
  try {
    const orders = await httpService.get("/api/orders/deleted");
    return orders;
  } catch (error) {
    console.log(error);
    return error;
  }
}
async function getAllConfirmedOrders() {
  try {
    const orders = await httpService.get("/api/orders/confirmed");
    return orders;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function confirmOrder(orderID, date) {
  try {
    const order = await httpService.patch(
      `/api/orders/confirm/${orderID}`,
      date
    );
    return order;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function deliveredOrder(orderID) {
  try {
    const order = await httpService.post(`/api/orders/delivered/${orderID}`);
    return order;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function getUserOrders(userID) {
  try {
    const orders = await httpService.get(`/api/orders/${userID}`);
    return orders;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function deleteOrder(userID) {
  try {
    const deletedOrder = await httpService.delete(`/api/orders/${userID}`);
    return deletedOrder;
  } catch (error) {
    console.log(error);
    return error;
  }
}

const ordersService = {
  createOrder,
  getAllOrders,
  confirmOrder,
  getUserOrders,
  deleteOrder,
  getAllDeletedOrders,
  getAllConfirmedOrders,
  deliveredOrder,
};

export default ordersService;
