const mongoose = require("mongoose");

const VacationSchema = mongoose.Schema({
    description: String,
    destination: String,
    picture: String,
    b_date: Date,
    e_date: Date,
    price: Number,
    followers: Number
}, { versionKey: false }); 

const Vacation = mongoose.model("Vacation", VacationSchema, "vacations"); // Model Name, Schema, Collection

module.exports = Vacation;
