import axios from "axios";

export default axios.create({
    baseURL: "https://carerlift2.herokuapp.com/api/users",
    headers: {
        "Content-type": "application/json"
    }
});