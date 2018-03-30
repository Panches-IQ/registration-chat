import axios from 'axios';
import config from '../../utils/config.json';

const url = config.client.apiPrefix;

const api = {
	loadMessages() {
		return axios.get('/', { withCredentials:true });
	},
	login(username, password) {
		const data = { username, password };
		
		return axios.post('/login', data);
	},
	logout(username) {
		return axios.post('/logout');
	},
	register(username, password, email) {
		const data = { username, password, email };

		return axios.post('/register', data);
	},
	createMessage(obj) {

	}
}

export default api;