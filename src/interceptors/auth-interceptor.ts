import { TokenService } from "../services/tokenService";
import { Interceptor } from "./interceptor";

export class AuthInterceptor implements Interceptor {
    tokenService: TokenService;

    constructor(tokenService: TokenService) {
        this.tokenService = tokenService;
    }

    intercept(req: any): void {
        throw new Error("Method not implemented.");
    }

}