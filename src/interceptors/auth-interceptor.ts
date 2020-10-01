import { AxiosRequestConfig } from "axios";
import { TokenService } from "../services/tokenService";

export function authInterceptor(tokenService: TokenService): CallableFunction {
    return (req: AxiosRequestConfig) => {
        if(!req || !req.url ||
            !!req.url.match(/^[a-zA-Z\:\d\/]*login\/*/) || 
            !tokenService.tokenExists()) {
                return req;
        }
        
        let token = tokenService.getToken();
        
        const headers = Object.assign({
            Authorization: token
        }, req.headers);

        req.headers = headers;

        return req;

    }
}