import axios from "axios";

export default axios.create({
    baseURL: "https://carerlift2.herokuapp.com/api/signup",
    headers: {
        "Content-type": "application/json"
    }
});