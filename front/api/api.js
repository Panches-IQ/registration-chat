import axios from 'axios';
import config from '../../utils/config.json';

const url = config.client.apiPrefix;

const api = {
	loadMessages() {
		return axios.get('/', { withCredentials:true });
	},
	login(username, password) {

		let data = {
	        password: password,
	        username: username
	    };
		return axios.post(
			'/login', 
			data
		);
	},
	logout() {

	},
	createMessage(obj) {

	}
}

export default api;