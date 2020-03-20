const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    user_name: String,
    password: Date,
    isAdmin: Boolean
}, { versionKey: false }); 

const User = mongoose.model("User", UserSchema, "users"); // Model Name, Schema, Collection

module.exports = User;
