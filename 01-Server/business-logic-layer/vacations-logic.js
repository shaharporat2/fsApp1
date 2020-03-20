const dal = require("../data-access-layer/dal");
const Vacation = require("../models/vacation");


/**
 * Connecting to the DataBase 
 */

dal.connectAsync()
    .then(db => console.log("We're connected to " + db.name + " on MongoDB."))
    .catch(err => console.log(err));

/**
 * Return all vacations from vacations collection
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
/**
 * 
 * @param {id of the vacation} _id 
 */
function getOneVacationAsync(_id) {
    return new Promise((resolve, reject) => {
        Vacation.findOne({ _id }, (err, vacation) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(vacation);
        });
    });
}

/**
 * 
 * @param {a vacation object } vacation 
 * update a vacation in the database
 */
function updateVacationtAsync(vacation) {
    return new Promise((resolve, reject) => {
        console.log(vacation._id)
        Vacation.updateOne({ _id: vacation._id }, vacation, (err, info) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(info.n ? vacation : null); // info.n - מספר המוצרים שנמצאו
        });
    });
}

/**
 * 
 * @param {*} vacation 
 * Insert vacation into the database
 */
function addVacationAsync(vacation) {
    return vacation.save();
}

function deleteVacationAsync(_id) {
    return new Promise((resolve, reject) => {
        Vacation.deleteOne({ _id }, (err, info) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}


module.exports = {
    getAllVacationsAsync,
    getOneVacationAsync,
    updateVacationtAsync,
    addVacationAsync,
    deleteVacationAsync
};