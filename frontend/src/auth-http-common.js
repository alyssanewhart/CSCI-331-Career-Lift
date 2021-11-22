import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8800/api/auth",
    headers: {
        "Content-type": "application/json"
    }
});