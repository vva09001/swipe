import axios from 'axios';
const { REACT_APP_BASE_URL, REACT_APP_API_VERSION } = process.env;

const request = axios.create({
	baseURL: `${REACT_APP_BASE_URL}/${REACT_APP_API_VERSION}`,
	timeout: 20000,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

request.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		return error;
	}
);

request.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		const response = JSON.parse(JSON.stringify(error));
		return response.response;
	}
);

export default request;
