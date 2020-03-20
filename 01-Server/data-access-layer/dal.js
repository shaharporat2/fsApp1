const mongoose = require("mongoose");

// Connect to mongo db
function connectAsync() {
    return new Promise((resolve, reject) => {
        mongoose.connect("mongodb+srv://admin:Aa123456!@cluster0-spze2.mongodb.net/test?retryWrites=true&w=majority",
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