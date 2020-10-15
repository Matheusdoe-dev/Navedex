import axios from "axios";

// navedex api
const navedexApi = axios.create({
  baseURL: "https://navedex-api.herokuapp.com/v1/",
});

export default navedexApi;
