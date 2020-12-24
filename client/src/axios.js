import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001',
});

export default instance;

//I don't think we need this info anywhere here, but just in case... 
//'mongodb://localhost/trendr'
