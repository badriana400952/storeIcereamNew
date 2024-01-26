// JavaScript
import axios from 'axios';

export const ApiData = axios.create({
    baseURL: "http://localhost:5000",
});

export const SetAuthToken = (token) => {
    if (token) {
        ApiData.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete ApiData.defaults.headers.common["Authorization"];
    }
};
