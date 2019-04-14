import axios from 'axios';

const token = localStorage.getItem('token');

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers['Authorisation'] = `Bearer ${token}`;

export default axios;
