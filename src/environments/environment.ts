import { AxiosRequestConfig } from "axios";

export const TOKEN = {
    scheme: "Bearer",
    name: "f-token",
    userInfo: "user-info"
}

export const axiosConfig: AxiosRequestConfig = {
    baseURL: "http://localhost:4201",
}