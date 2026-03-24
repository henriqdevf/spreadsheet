import axios from "axios";

export const api = axios.create({
    baseURL: 'https://spreadsheet-rbnj.onrender.com',
})