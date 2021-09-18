import axios from "axios";

export default axios.create({
  //baseURL: "https://search.torre.co/people/_search/",
  baseURL: "https://torre.co/api/genome/people?limit=2&q=anna",
  headers: {
    "Content-type": "application/json"
  },
  // data: {
  //   "name":{"term":"anna"}
  // }
});