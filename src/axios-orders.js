import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-tasty-burger.firebaseio.com/'
});

export default instance;
