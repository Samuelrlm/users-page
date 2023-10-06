import axios from "axios";
import store from "../store/store";

const token = localStorage.getItem("token");

const api = axios.create({
  baseURL: "http://localhost:4707/",
  headers: {
    "Content-type": "application/json",
    "Authorization": "Bearer " + token
  }
});

export default api;