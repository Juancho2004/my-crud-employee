import axios from "axios";

const API = 'https://reqres.in/api/';
export const API_USER = `${API}users/`;

export const api = axios.create({
    baseURL: API
})