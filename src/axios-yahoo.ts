import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://cors.io/?https://query2.finance.yahoo.com/v7/finance/options/"
});

export default instance;
