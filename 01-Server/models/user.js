const mongoose = require("mongoose");
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
    first_name:{
        type: String,
        trim: true,
        required: true,
        max: 32 
    },

    last_name:{
        type: String,
        trim: true,
        required: true,
        max: 32  
    },
    user_name:{
        type: String,
        trim: true,
        required: true,
        max: 32,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    salt: {
        type: String
    },
    resetPasswordLink: {
        data: String,
        

    },
    isAdmin: Boolean
}, { versionKey: false }); 

const User = mongoose.model("User", UserSchema, "users"); // Model Name, Schema, Collection

module.exports = User;
