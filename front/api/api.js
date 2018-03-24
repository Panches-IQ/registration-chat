import axios from 'axios';

const api = {
	getCollection(remote) {
		return axios.get(remote, { withCredentials:true });
	},
	logIn() {

	},
	logOut() {

	},
	postMessage(obj) {

	}
}

export default api;