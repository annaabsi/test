import axios from "axios";

export default axios.create({
  baseURL: "https://search.torre.co/",
  headers: {
    "Content-type": "application/json",
  },
});
