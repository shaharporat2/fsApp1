const dal = require("../data-access-layer/dal");
const User = require("../models/user");
const {check} = require('express-validator');


/**
 * Connecting to the DataBase 
 */

dal.connectAsync()
    .then(db => console.log("We're connected to " + db.name + " on MongoDB."))
    .catch(err => console.log(err));

function addUserAsync(user) {
    return user.save();
}

signUpValidator = [
    check('user_name')
    .not()
    .isEmpty()
    .withMessage('Name is requierd'),
    check('first_name')
    .not()
    .isEmpty()
    .withMessage('First name is requierd'),
    check('last_name')
    .not()
    .isEmpty()
    .withMessage('First name is requierd'),
    check('password')
    .isLength({ min : 6})
    .withMessage('Must be valid passowrd'),
];


module.exports = {
    addUserAsync
};