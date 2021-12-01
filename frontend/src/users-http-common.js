import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8800/api/users",
    headers: {
        "Content-type": "application/json"
    }
});