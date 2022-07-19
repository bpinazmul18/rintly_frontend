import axios from "axios";
import { toast } from 'react-toastify';
import logger from './logService'
import config from '../config.json'
import auth from "./auth"

axios.defaults.baseURL = config.apiEndpoint
axios.defaults.headers.common['x-auth-token'] = auth.getJwt()

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error)
    toast.error('An unexpected error occurred!')
  }

  return Promise.reject(error);
});

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
}

export default http;