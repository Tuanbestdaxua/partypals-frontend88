const axios = require("axios");

const axiosClient = axios.create({
  baseURL: 'https://partypal-vwog.onrender.com/api/',
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
 const accessToken = localStorage.getItem("access_token");
    if(accessToken){
    config.headers["Authorization"] = `Bearer ${accessToken}`;
     }
    return config;
  },
  (error) => {
    // return Promise.reject(error);
    return console.log(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  async (error) => {
    // return Promise.reject(error);
    return console.log(error);
  }
);

export default axiosClient;
