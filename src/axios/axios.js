import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    accept: "application/json",
  },
});

const sheets = {
  getPosts: () => api.get("posts"),
  getUsers: () => api.get("users"),
  getTodos: () => api.get("todos"),
};

export default sheets;
