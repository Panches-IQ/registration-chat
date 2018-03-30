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
    createMessage(message, username) {
        api.createMessage(message, username)
            .then(response => {
                console.log(response);
            })
    },
    establishConnection() {

    },
    login(username, password, cb) {
        Dispatcher.dispatch({
            type: 'login-request'
        });

        api.login(username, password)
            .then(response => {
                Dispatcher.dispatch({
                    type: 'login-success',
                    username: response.data.username,
                    status: response.status
                });
                cb({ status:200 });
            })
            .catch(err => {
                Dispatcher.dispatch({
                    type: 'login-error',
                    error: err
                });
            });
    },
    register(username, password, email, cb) {
        Dispatcher.dispatch({
            type:'register-request'
        });
        api.register(username, password, email)
            .then(response => {
                // check for data/status to prevent registration of the same logins
                Dispatcher.dispatch({
                    type: 'register-success',
                    username: response.data.username
                });
                cb({ status:200 });
            })
            .catch(err => {

            })

    },
    logout(username, cb) {
        Dispatcher.dispatch({
            type: 'logout-request'
        });
        api.logout(username)
            .then(response => {
                Dispatcher.dispatch({
                    type: 'logout-success'
                });
                cb({ status:200 });
            })
            .catch(err => {

            })
    }
}

export default dataActions;