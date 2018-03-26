'use strict';

import api from '../api/api';

const dataStore = {
    _username: null,
    messages: [],
    getMessages: function() {return api.getCollection("https://jsonplaceholder.typicode.com/posts")},
    loadMessages: function() {
    }
};

export default dataStore;