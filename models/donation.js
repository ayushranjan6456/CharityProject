var mongoose = require("mongoose");

var donationSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: {type: String},
    contact: String,
    address: String
});

module.exports = mongoose.model("Donation", donationSchema);