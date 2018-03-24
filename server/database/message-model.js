import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    title     : { type: String },
    text      : { type: String, required: true },
    createdAt : { type: Date },
    creator   : { type: String }
});

mongoose.model('Message', MessageSchema);
