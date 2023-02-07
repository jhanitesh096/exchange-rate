import axios from "axios";

export const api = axios.create({
  baseURL: "https://open.er-api.com/v6/latest",
});
