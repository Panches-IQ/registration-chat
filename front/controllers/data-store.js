import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/dispatcher';

const _messages = [];
const _username = null;
const _is_loading = false;

const EV_CHANGE = 'change';

const dataStore = Object.assign({}, EventEmitter.prototype, {
    getUsername() {
        return _username;
    },
    getMessages() {
        return _messages;
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
        case 'request': break;
        default: break;
    }
});

export default dataStore;