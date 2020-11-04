const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var methodOverride = require('method-override');
var Volunteer = require('./models/volunteer.js')
var indexRoutes = require('./routes/index')
//seedDB = require('./seed.js')

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); ''
app.use(methodOverride('_method'));
app.use(express.static(__dirname + "/public"))
app.set('view engine', 'ejs');


//mongoose.connect('mongodb+srv://ayush:ayush@cluster0.2qbjg.mongodb.net/cbb?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
mongoose.connect('mongodb://localhost:27017/volunteer', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

//seedDB();

//Passport config
app.use(require('express-session')({
    secret: "Jon Snow kills Danny",
    resave: false,
    saveUninitialized: false
}))
app.use(indexRoutes);

app.listen(process.env.PORT || 5000, function () {
    console.log("Server has Started at port 5000");
});
