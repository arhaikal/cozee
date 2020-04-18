import axios from "axios"

export const baseApi = axios.create({
  baseURL: "https://api.cozee.ee/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})
