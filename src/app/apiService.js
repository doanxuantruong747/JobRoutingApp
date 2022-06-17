import { BASE_URL } from './config';
import axios from 'axios';
const apiSevice = axios.create({
    baseURL: BASE_URL,
})

export default apiSevice;