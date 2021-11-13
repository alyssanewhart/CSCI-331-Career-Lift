import http from "../http-common";

class UserDataService {

    createUser(data) {
        return http.post("/user", data);
    }

}

export default new UserDataService();