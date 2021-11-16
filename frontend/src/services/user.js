import http from "../http-common";

class UserDataService {

    createUser(data) {
        return http.post("/user", data);
    }

    authenticateUser(data) {
        return http.post("/login", data);
    }

}

export default new UserDataService();