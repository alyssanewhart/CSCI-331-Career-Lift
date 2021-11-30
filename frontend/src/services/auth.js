import http from "../auth-http-common";

class AuthDataService {

    createUser(data) {
        return http.post("/signup", data);
    }

    authenticateUser(data) {
        return http.post("/login", data);
    }

}

export default new AuthDataService();