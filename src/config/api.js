import axios from 'axios'

// Create an axios instance
export default axios.create({
  baseURL: 'https://deployed-express-server.herokuapp.com/',
  timeout: 10000,
  withCredentials: true
})