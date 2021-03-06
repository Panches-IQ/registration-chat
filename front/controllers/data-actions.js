import api from '../api/api';
import Constants from '../../utils/constants';
import Dispatcher from '../dispatcher/dispatcher';
import io from 'socket.io-client';

const socket = io();

socket.on('chatmessage', message => {
    if (typeof message !== 'object')
        message = JSON.parse(message);

    Dispatcher.dispatch({
        type: 'new-message',
        new_message: message
    })
});

const dataActions = {
    loadMessages() {
        Dispatcher.dispatch({
            type: 'messages-request'
        });
        api.loadMessages()
            .then(response => {

                const { messages, username } = response.data;

                Dispatcher.dispatch({
                    type: 'messages-success',
                    messages: messages,
                    username: username,
                    status: response.status
                })
            })
            .catch(err => {
                Dispatcher.dispatch({
                    type: 'messages-error',
                    error: err
                })
            });
    },
    createMessage(text, creator) {

        const date = Date.now();

        api.createMessage(text, creator, date)
            .then(response => {

            })
            .catch(err => {
                // some callbacks to flash that the message has not been send
                console.log(err);
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