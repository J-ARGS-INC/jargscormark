import axios from "axios";
export const globalUrl = env == import.meta.env.VITE_DEV_ENV ? "http://localhost:3001" : "https://jargscormark-backend.vercel.app";

export const getItemInDB = (url, config) => axios.get(globalUrl + url, config).then(res => res.data)
export const createItemInDB = (url, data, config) => axios.post(globalUrl + url, data, config).then(res => res.data);
export const updateItemInDb = (url, data, config) => axios.patch(globalUrl + url, data, config)
export const deleteItemInDb = (url, config) => axios.delete(globalUrl + url, config)