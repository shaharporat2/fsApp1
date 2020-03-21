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
    hash_password:{
        type: String,
        required: true,
    },
    salt: {
        type: String
    },
    role: {
        type: String,
        default: 'subscriber'
    },
    resetPasswordLink: {
        data: String,
    },
    isAdmin: Boolean
}, { timestamps: true, versionKey: false }); 

UserSchema.virtual('password ')
.set(function(password){
    this._password = password;
    this.salt = this.makeSalt();
    this.hash_password = this.encryptPassword(password);
})
.get(function(){
    return this._password;
})

UserSchema.methods = {

    authenticate: function(plainText){
        return this.encryptPassword(plainText) == this.hash_password;
    },

    encryptPassword : function(password){
         if(!password){
            return ''
         } 
         try{
            return crypto.createHmac('sha1',this.salt)
                .update(password)
                .digest('hex');
         }catch(err){
            return ''
         }
    }, 

    makeSalt : function(){
        return Math.round(new Date().valueOf() * Math.random() + '');
    }
}

const User = mongoose.model("User", UserSchema, "users"); // Model Name, Schema, Collection

module.exports = User;
