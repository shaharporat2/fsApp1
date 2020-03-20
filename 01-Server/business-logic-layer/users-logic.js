const dal = require("../data-access-layer/dal");
const User = require("../models/user");


/**
 * Connecting to the DataBase 
 */

dal.connectAsync()
    .then(db => console.log("We're connected to " + db.name + " on MongoDB."))
    .catch(err => console.log(err));

function addUserAsync(user) {
    return user.save();
}

module.exports = {
    addUserAsync
};