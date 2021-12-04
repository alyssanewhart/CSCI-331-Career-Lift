import axios from "axios";

export const axiosObject =  axios.create({
    baseURL: "https://carerlift2.herokuapp.com/api/"
})