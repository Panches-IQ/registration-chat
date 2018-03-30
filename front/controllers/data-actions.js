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
    createMessage(text, creator) {

        const date = Date.now();

        api.createMessage(text, creator, date)
            .then(response => {

                const { id, published } = response.data;

                Dispatcher.dispatch({
                    type: 'new-message',
                    new_message: {
                        text: text,
                        creator: creator,
                        published: published,
                        id: id
                    }
                });
            })
            .catch(err => {

            });
    },
    establishConnection() {

    },
    login(username, password, cb) {
        Dispatcher.dispatch({
            type: 'login-request'
        });

        api.login(username, password)
            .then(response => {

                const { status, username } = response.data;
                
                if (status) {
                    Dispatcher.dispatch({
                        type: 'login-success',
                        username: username
                    });
                    cb({ status:true });
                } else {
                    Dispatcher.dispatch({
                        type: 'login-error',
                        error: 'wrong credentials'
                    });
                    cb({ status:false });
                }
                
            })
            .catch(err => {
                Dispatcher.dispatch({
                    type: 'login-error',
                    error: err
                });
                cb({ status:null });
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