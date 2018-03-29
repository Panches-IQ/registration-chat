import axios from 'axios';
import config from '../../utils/config.json';

const url = config.client.apiPrefix;

const api = {
	loadMessages() {
		return axios.get('/', { withCredentials:true });
	},
	login(username, password) {
		const data = { password, username };
		
		return axios.post('/login', data);
	},
	logout(username) {
		return axios.post('/logout');
	},
	createMessage(obj) {

	}
}

export default api;