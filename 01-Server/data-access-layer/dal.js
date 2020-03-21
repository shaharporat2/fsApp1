const mongoose = require("mongoose");
require('dotenv').config();


// Connect to mongo db
function connectAsync() {
    return new Promise((resolve, reject) => {
        mongoose.connect(process.env.DATABASE,
            { useNewUrlParser: true, useUnifiedTopology: true }, (err, mongo) => {
                if(err) {
                    reject(err);
                    return;
                }
                resolve(mongo);
            });
    });
}

module.exports = {
    connectAsync
};