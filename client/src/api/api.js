import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// Configuration for axios
// console.log("Token:", localStorage.getItem("token"));
// const config = {
//   headers: {
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   },
// };

// // Log config to debug
// console.log("Axios Config:", config);

// //todo: user api endpoints
// // Creating test api
// export const testApi = () => Api.get("/test");
// // http://localhost:5000//test

// //  Creating register api
// export const registerApi = (data) => Api.post("/api/user/register", data);

// Create
