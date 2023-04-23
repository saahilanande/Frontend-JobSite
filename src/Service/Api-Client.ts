import axios from "axios";

export default axios.create({
  baseURL: "https://backendjobsite.vercel.app/",
  // baseURL: "http://localhost:3000/",
});
