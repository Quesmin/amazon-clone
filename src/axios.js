import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-dfd68.cloudfunctions.net/api'
    
    //'http://localhost:5001/clone-dfd68/us-central1/api'
});

export default instance;

//https://us-central1-clone-dfd68.cloudfunctions.net/api
