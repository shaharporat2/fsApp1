const dal = require("../data-access-layer/dal");
const Vacation = require("../models/vacation");


/**
 * Connecting to the DataBase 
 */

dal.connectAsync()
    .then(db => console.log("We're connected to " + db.name + " on MongoDB."))
    .catch(err => console.log(err));

/**
 * 
 */
function getAllVacationsAsync() {
    return new Promise((resolve, reject) => {
        Vacation.find({}, (err, products) => { // retrive all vacations
            if (err) {
                reject(err);
                return;
            }
            resolve(products);
        });
    });
}

module.exports = {
    getAllVacationsAsync
};