import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:7777/api", // 뒤에 /api 붙여도 된다
});

export default api;
