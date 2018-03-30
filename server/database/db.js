const mongoose = require('mongoose');
const config = require('../../utils/config.json');

require('./user-model');
require('./message-model');

const User = mongoose.model('User');
const Message = mongoose.model('Message');

function setUpConnection() {
    return mongoose.connect(`mongodb://${config.database.host}:${config.database.port}/${config.database.name}`);
}

function listMessages() {
    return Message.find();
}

function listUsers() {
    return User.find();
}

function login(data) {
    const { username, password } = data;

    return User.findOne({
        username: username,
        password: password
    });
}

function createUser(data) {
    const user = new User({
        username: data.username,
        email: data.email,
        password: data.password,
        registered: Date.now()
    });

    return user.save();
}

function createMessage(data) {
    const message = new Message({
        creator: data.creator || data.username,
        text: data.text || data.body,
        published: data.date || Date.now()
    });

    return message.save();
}

module.exports = {
    createUser,
    createMessage,
    setUpConnection,
    listMessages,
    login,
    listUsers
}