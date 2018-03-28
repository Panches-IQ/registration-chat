import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/dispatcher';
import Constants from '../../utils/constants';

let _messages = [];
let _username = null;
let _is_loading = false;
let _loading_error = null;

const formatMessage = (message) => {
    return {
        id: message.id,
        userId: message.userId,
        text: message.text || message.body,
        date: message.date
    }
}

const dataStore = Object.assign({}, EventEmitter.prototype, {
    getUsername() {
        return _username;
    },
    getMessages() {
        return _messages;
    },
    getLoadingError() {
        return _loading_error;
    },
    isLoading() {
        return _is_loading;
    },
    emitChange() {
        this.emit(Constants.EV_CHANGE);
    },
    addChangeListener(cb) {
        this.on(Constants.EV_CHANGE, cb);
    },
    deleteChangeListener(cb) {
        this.removeListener(Constants.EV_CHANGE, cb);
    }
});

Dispatcher.register(function(action) {
    switch (action.type) {
        case 'request': {
            _is_loading = true;

            dataStore.emitChange();
            break;
        }
        case 'success': {
            _is_loading = false;
            _messages = action.messages.map( formatMessage );
            _loading_error = null;
            // _username = action.username; // ???

            dataStore.emitChange();
            break;
        }
        case 'error': {
            _loading_error = action.error;

            dataStore.emitChange();
            break;
        }
        case 'login': {
            _username = action.username;

            dataStore.emitChange();
            break;
        }
        case 'logout': {
            _username = null;

            dataStore.emitChange();
            break;
        }
        case 'new_message': {
            _messages.push(action.new_message);

            dataStore.emitChange();
            break;
        }
        default: {
            console.log('Please check handler name...');
            break
        };
    }
});

export default dataStore;