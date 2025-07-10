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
    return null;
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
    return null;
  }
}

async function getUserOrders(userID) {
  try {
    const orders = await httpService.get(`/api/orders/${userID}`);
    return orders;
  } catch (error) {
    console.log(error);
    return null;
  }
}

const ordersService = {
  createOrder,
  getAllOrders,
  confirmOrder,
  getUserOrders,
};

export default ordersService;
