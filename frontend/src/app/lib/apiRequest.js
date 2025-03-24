
import axios from "axios";
export const apiRequest = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
    withCredentials: true,
    // credentials: 'include',
    // headers: {
    //     'Content-Type': 'application/json',
    // },
})