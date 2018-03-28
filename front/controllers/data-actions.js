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
            })
    },
    createMessage() {

    },
    establishConnection() {

    }
}

export default dataActions;