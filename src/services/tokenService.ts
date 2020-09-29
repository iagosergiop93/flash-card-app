import { Principal } from "../entities/Principal";
import { TOKEN } from "../resources/environment";

export class TokenService {

	tokenExists(): boolean {
		const tk = localStorage.getItem(TOKEN.name);
		return !!tk && tk.indexOf(TOKEN.scheme) !== -1;
	}

	saveToken(token: string): void {
		localStorage.setItem(TOKEN.name, token);
	}

	getToken(): string | null {
		return localStorage.getItem(TOKEN.name);
	}

	saveInfo(userInfo: Principal) {
		sessionStorage.setItem(TOKEN.userInfo, JSON.stringify(userInfo));
	}

	getInfo(): Principal {
		const info = sessionStorage.getItem(TOKEN.userInfo);
		return !!info ? JSON.parse(info) : null;
	}

	deleteToken(): void {
		if (this.tokenExists()) {
			localStorage.removeItem(TOKEN.name);
			sessionStorage.removeItem(TOKEN.userInfo);
		}
	}

}