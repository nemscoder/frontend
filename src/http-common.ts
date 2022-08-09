import axios from "axios"
export default axios.create({
  baseURL: "172.23.174.155:5000/api",
  headers: {
    "Content-type": "application/json"
  }
})