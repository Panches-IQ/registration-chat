const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username   : { type: String, required: true },
    email      : { type: String },
    password   : { type: String, required: true },
    registered : { type: Date }
});

mongoose.model('User', UserSchema);
