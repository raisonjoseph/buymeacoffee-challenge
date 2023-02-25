import axios, {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

const { REACT_APP_API_ENDPOINT, NODE_ENV, REACT_APP_AUTH_TOKEN } = process.env;

if (!REACT_APP_API_ENDPOINT) {
  const errorMessage = `Missing REACT_APP_API_ENDPOINT in .env.${NODE_ENV} file \n Add and restart server`;
  alert(errorMessage);
  throw errorMessage;
}

export const baseURL = REACT_APP_API_ENDPOINT;

axios.defaults.withCredentials = true;

const instance = axios.create({
  baseURL,
  withCredentials: true,
});

const onRequestSuccess = (config: InternalAxiosRequestConfig) => {
  config.headers["Authorization"] = `Bearer ${REACT_APP_AUTH_TOKEN}`;
  return config;
};

const onRequestFail = (error: AxiosError) => {
  return Promise.reject(error);
};

instance.interceptors.request.use(onRequestSuccess, onRequestFail);

const onResponseSuccess = (response: AxiosResponse) => {
  return response;
};

const onResponseFail = (error: AxiosError) => {
  if (error && !error.response) {
  } else {
    const status = error.response?.status;
    if (status === 401) {
    }
    if (status === 403) {
    }
  }
  return Promise.reject(error);
};
instance.interceptors.response.use(onResponseSuccess, onResponseFail);

export default instance;
