import { axiosObject } from "../config";
import http from "../users-http-common";

class UserDataService {

    createUser(data) {
        return axiosObject.post("/user", data);
    }

}

export default new UserDataService();