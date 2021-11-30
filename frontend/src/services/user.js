import http from "../users-http-common";

class AuthDataService {

    updateUser(id, data) {
        return http.put(id, data);
    }

    getUser(id) {
        return http.get(id);
    }
}

export default new AuthDataService();