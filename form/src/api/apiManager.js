
import axios from 'axios'
import { baseURL } from './apiEndPoint';


const ApiManager = axios.create({
    baseURL: baseURL,
    responseType: 'json',
});


export default ApiManager;