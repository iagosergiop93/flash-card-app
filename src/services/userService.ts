import { AxiosInstance, AxiosResponse } from "axios";
import { User } from "../entities/User";
import { axiosService } from "./axiosService";
import { TokenService } from "./tokenService";

export class UserService {

    constructor(
        public axios: AxiosInstance,
        public tokenService: TokenService) {}

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

    private saveLoginInfo(res: AxiosResponse): AxiosResponse {
        // Save token
		const token = res.headers['Authorization'];
		this.tokenService.saveToken(token);

		// Save User info
		const info = res.data;
		this.tokenService.saveInfo(info);

		return res;
	}

    Factory(): UserService {
        const axios = axiosService();
        const tokenService = TokenService.prototype.Factory();
        return new UserService(axios, tokenService);
    }

}