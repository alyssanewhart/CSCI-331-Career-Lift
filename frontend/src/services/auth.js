import http from "../auth-http-common";

class UserDataService {

    createUser(data) {
        return http.post("/signup", data);
    }

    authenticateUser(data) {
        return http.post("/login", data);
    }

}

export default new UserDataService();