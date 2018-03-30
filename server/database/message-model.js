const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    creator   : { type:String, required:true },
    text      : { type:String, required:true },
    published : { type:Number, required:true }
});

mongoose.model('Message', MessageSchema);