import axios from "axios";

const weatherApi = axios.create({
  baseURL: "https://api.weatherapi.com/v1/",
});

export default weatherApi;
