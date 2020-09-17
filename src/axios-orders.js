import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-order-a1d80.firebaseio.com/'
});

export default instance;