import axios from 'axios';
import config from '../../utils/config.json';

const api = {
	loadMessages() {
		return axios.get(config.client.messagesApiPrefix, { withCredentials:true });
	},
	logIn() {

	},
	logOut() {

	},
	createMessage(obj) {

	}
}

export default api;