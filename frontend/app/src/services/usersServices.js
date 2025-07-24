import httpService, { setDefaultCommonHeaders } from "./httpServices";
import { jwtDecode } from "jwt-decode";

const TOKEN_KEY = "jwtToken";

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
  const token = response.data.token;
  localStorage.setItem("jwtToken", token);
  refreshToken();
  console.log(jwtDecode(token));
  return response;
}

function logOut() {
  localStorage.removeItem("jwtToken");
}

function getJWT() {
  return localStorage.getItem(TOKEN_KEY);
}

function getUser() {
  try {
    const token = getJWT();
    console.log(token);
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
