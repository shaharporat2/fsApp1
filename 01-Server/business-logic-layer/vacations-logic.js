const dal = require("../data-access-layer/dal");

/**
 * Connecting to the DataBase 
 */

dal.connectAsync()
    .then(db => console.log("We're connected to " + db.name + " on MongoDB."))
    .catch(err => console.log(err));
