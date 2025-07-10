import httpService, { setDefaultCommonHeaders } from "./httpServices";
import { jwtDecode } from "jwt-decode";

function refreshToken() {
  setDefaultCommonHeaders("x-auth-token", localStorage.getItem("jwtToken"));
  console.log(localStorage.getItem("jwtToken"));
}
refreshToken();

async function signUp(user) {
  const response = await httpService.post("/api/users", user);
  console.log(response);
  return response;
}

async function logIn(user) {
  const response = await httpService.post("/api/auth", user);
  refreshToken();
  const token = response.data.token;
  console.log(jwtDecode(token));
  localStorage.setItem("jwtToken", token);
  return response;
}

function logOut() {
  localStorage.removeItem("jwtToken");
}

function getUser() {
  try {
    const token = localStorage.getItem("jwtToken");
    return jwtDecode(token);
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function getUserDetails(userId) {
  const response = await httpService.get(`/api/users/${userId}`);
  console.log(response);
  return response;
}

const userService = {
  refreshToken,
  signUp,
  logIn,
  logOut,
  getUser,
  getUserDetails,
};

export default userService;
