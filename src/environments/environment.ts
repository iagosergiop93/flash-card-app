import { AxiosRequestConfig } from "axios";

export const DOMAIN = "http://localhost:3000";

export const TOKEN = {
    scheme: "Bearer",
    name: "f-token",
    userInfo: "user-info"
}

export const axiosConfig: AxiosRequestConfig = {
    baseURL: "http://localhost:8080",
}