import axios from "axios";

const client = axios.create();

const appId = import.meta.env.VITE_APP_ID;
const appKey = import.meta.env.VITE_APP_KEY;

client.interceptors.request.use(
  (config) => {
    config.headers["app_id"] = appId;
    config.headers["app_key"] = appKey;
    config.headers["ResourceVersion"] = "v4";
    config.headers["Access-Control-Allow-Origin"] = "*";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default client;
