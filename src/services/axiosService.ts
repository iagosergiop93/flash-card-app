import Axios, { AxiosInstance } from "axios";
import { TokenService } from "./tokenService";
import { authInterceptor } from "../interceptors/auth-interceptor";
import { axiosConfig } from "../environments/environment";

var axios: AxiosInstance;

export function axiosService(): AxiosInstance {
    return !!axios ? axios : createAxiosInstance();
}

function createAxiosInstance(): AxiosInstance {
    const tokenService = TokenService.Factory();
    const authIntCallback = authInterceptor(tokenService);
    
    axios = Axios.create(axiosConfig);
    axios.interceptors.request.use((config) => {
        return authIntCallback(config);
    });

    return axios;
}