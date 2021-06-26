import axios from 'axios';
import config from '../config';

export default axios.create({
    baseURL: config.STREAMS_API_BASE_URL
});