import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/dispatcher';
import Constants from '../../utils/constants';

let _messages = [];
let _username = null;
let _is_loading = false;
let _loading_error = null;

const { EV_CHANGE } = Constants;

const formatMessage = (message) => {
    return {
        id: message.id || message._id,
        creator: message.creator || message.username,
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
        this.emit(EV_CHANGE);
    },
    addChangeListener(cb) {
        this.on(EV_CHANGE, cb);
    },
    deleteChangeListener(cb) {
        this.removeListener(EV_CHANGE, cb);
    }
});

Dispatcher.register(function(action) {
    switch (action.type) {
        case 'messages-request': {
            _is_loading = true;

            dataStore.emitChange();
            break;
        }
        case 'messages-success': {
            _is_loading = false;
            _messages = action.messages.map( formatMessage );
            _loading_error = null;
            _username = action.username || null;

            dataStore.emitChange();
            break;
        }
        case 'messages-error': {
            _loading_error = action.error;

            dataStore.emitChange();
            break;
        }
        case 'login-request': {
            _is_loading = true;

            dataStore.emitChange();
            break;
        }
        case 'login-success': {
            _username = action.username;

            dataStore.emitChange();
            break;
        }
        case 'login-error': {
            _loading_error = action.error;

            dataStore.emitChange();
            break;
        }
        case 'logout-request': {
            _is_loading = true;

            dataStore.emitChange();
            break;
        }
        case 'logout-success': {
            _username = null;

            dataStore.emitChange();
            break;
        }
        case 'new-message': {
            _messages.push(formatMessage(action.new_message));

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