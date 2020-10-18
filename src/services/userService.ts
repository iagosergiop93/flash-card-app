import { AxiosInstance, AxiosResponse } from "axios";
import { User } from "../entities/User";
import { BrowserNavigator } from "../utils/navigators/browserNavigator";
import { axiosService } from "./axiosService";
import { TokenService } from "./tokenService";

export class UserService {

    axios: AxiosInstance;
    tokenService: TokenService;

    constructor(axios: AxiosInstance, tokenService: TokenService) {
        this.tokenService = tokenService;
        this.axios = axios;
    }

    authUser(): Promise<AxiosResponse> {
        return this.axios.post("/users/auth")
            .then(res => {
                this.saveLoginInfo(res);
                return res;
            });
    }
    
    login(username: string, passwd: string): Promise<AxiosResponse> {
        const payload = { username, passwd };
        return this.axios.post("/users/login", payload)
            .then(res => {
                console.log(res);
                this.saveLoginInfo(res);
                return res;
            })
            .catch(err => {
                console.log(err);
                return err; 
            });
    }

    createUser(user: User): Promise<AxiosResponse> {
        const payload = user;
        return this.axios.post("/users/user", payload)
            .then(res => {
                console.log(res);
                this.saveLoginInfo(res);
                return res;
            })
            .catch(err => {
                console.log(err);
                return err; 
            });
    }

    logout = () => {
        this.tokenService.deleteToken();
        BrowserNavigator.prototype.navigateTo('/signin');
    }

    private saveLoginInfo(res: AxiosResponse): AxiosResponse {
        // Save token
		const token = res.headers['authorization'];
		this.tokenService.saveToken(token);

		// Save User info
		const info = res.data;
		this.tokenService.saveInfo(info);

		return res;
    }
    
    public isUserLoggedIn(): boolean {
        return this.tokenService.tokenExists();
    }

    static Factory(): UserService {
        const axios = axiosService();
        const tokenService = TokenService.Factory();
        return new UserService(axios, tokenService);
    }

}