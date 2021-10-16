import axios from "axios";
import * as api from "./../constants/api";
export default axios.create({
  baseURL: api.server,
  headers: {
    "Content-type": "application/json",
  },
});
