import api from '../api/api';
import Constants from '../../utils/constants';
import Dispatcher from '../dispatcher/dispatcher';

const dataActions = {
    loadMessages() {
        Dispatcher.dispatch({
            type: 'request'
        });

        api.loadMessages()
            .then(response => {
                Dispatcher.dispatch({
                    type: 'success',
                    messages: response.data,
                    status: response.status
                })
            })
            .catch(err => {
                Dispatcher.dispatch({
                    type: 'error',
                    error: err
                })
            });
    },
    createMessage() {

    },
    establishConnection() {

    },
    login(username, password) {
        Dispatcher.dispatch({
            type: 'login-request'
        });

        api.login(username, password)
            .then(response => {
                Dispatcher.dispatch({
                    type: 'login-success',
                    username: response.username,
                    status: response.status
                })
            })
            .catch(err => {

            });
    },
    register() {

    },
    logout() {

    }
}

export default dataActions;