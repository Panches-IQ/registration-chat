import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name       : { type: String },
    login      : { type: String, required: true },
    password   : { type: String },
    registered : { type: Date }
});

mongoose.model('User', UserSchema);
