import axios from 'axios';

// Create an axios instance without headers
export const apiRequest = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
    withCredentials: true, // Ensure that credentials (cookies) are included in requests
});

// Function to dynamically set Authorization header using token from localStorage
export const setAuthHeader = () => {
    const token = localStorage.getItem('token'); // Access localStorage on client-side only
    if (token) {
        apiRequest.defaults.headers['Authorization'] = `Bearer ${token}`;
    } else {
        delete apiRequest.defaults.headers['Authorization'];
    }
};
