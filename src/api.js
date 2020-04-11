import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coinpaprika.com/v1/"
});

export const apiControler = {
  prices: () => api.get("tickers"),
  exchanges: () => api.get("exchanges"),
  coins: () => api.get("coins")
};
/* For testing */
async function testFunc() {
  const data = await apiControler.prices();
  console.log("hi");
}

testFunc();
