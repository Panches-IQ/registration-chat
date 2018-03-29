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
    login(username, password, history) {
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
                history.push('/');
            })
            .catch(err => {
                Dispatcher.dispatch({
                    type: 'login-error',
                    error: err
                });
            });
    },
    register() {

    },
    logout(username, history) {
        history.push('/');
        Dispatcher.dispatch({
            type: 'logout-request'
        });
        api.logout(username)
            .then(response => {
                Dispatcher.dispatch({
                    type: 'logout-success'
                });
            })
            .catch(err => {

            })
    }
}

export default dataActions;