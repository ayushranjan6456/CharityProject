var mongoose = require("mongoose");

var volunteerSchema = new mongoose.Schema({
    name: String,
    email: {type: String},
    contact: String,
    address: String
});

module.exports = mongoose.model("Volunteer", volunteerSchema);