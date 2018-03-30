const mongoose = require('mongoose');
const config = require('../../utils/config.json');

require('./user-model');

const User = mongoose.model('User');

function setUpConnection() {
    mongoose.connect(`mongodb://${config.database.host}:${config.database.port}/${config.database.name}`);
}

function createUser(data) {
    const user = new User({
        title: data.title,
        text: data.text,
        createdAt: new Date()
    });

    return user.save();
}

// function deleteNote(id) {
//     return Note.findById(id).remove();
// }

module.exports = {
    createUser,
    setUpConnection
}