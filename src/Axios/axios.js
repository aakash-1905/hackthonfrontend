import axios from "axios"
const instance = axios.create({
    baseURL:"https://hacbackend.vercel.app//api"
})
export default instance