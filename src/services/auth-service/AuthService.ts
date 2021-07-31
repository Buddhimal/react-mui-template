import Cookies from "js-cookie";

class AuthService {
    static instance: AuthService;
    constructor() {
        if (AuthService.instance) {
            return AuthService.instance;
        }

        AuthService.instance = this;
    }

    saveTokenData(jwtToken: string, refreshToken: string): void {
        localStorage.setItem("jwtToken", jwtToken);
        localStorage.setItem("refreshToken", refreshToken);
    }

    clearTokenData(): void {
        localStorage.clear();
    }

    async logout(): Promise<any> {
        localStorage.removeItem("idToken");
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("username");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("version");
    }

    isAuthenticated(): boolean {
        return true;
        return Cookies.get('jwt') !== undefined;
    }
}

export default new AuthService();
