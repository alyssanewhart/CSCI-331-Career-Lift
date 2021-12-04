import axios from "axios";

export const axiosObject =  axios.create({
    baseURL: "https://careerlitz.herokuapp.com/api/"
})