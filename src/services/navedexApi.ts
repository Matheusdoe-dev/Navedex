import axios from "axios";

const navedexApi = axios.create({
  baseURL: "https://navedex-api.herokuapp.com/v1/",
});

export default navedexApi;
