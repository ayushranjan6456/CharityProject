var express = require('express');
var router = express.Router();
var Volunteer = require('../models/volunteer')  
var Donation = require('../models/donation')



router.get('/', function (req, res) {
    res.render('index')
});

router.post('/volunteer', function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var contact = req.body.contact;
    var address = req.body.address;
    var newitem = { name: name, email: email, contact:contact, address:address }
    Volunteer.create(newitem, function (err, post) {
        if (err) {
            console.log(err);
        } else {
            console.log(post);
        }
    });
    res.redirect('/');
});

router.get('/volunteer', function (req, res) {
    Volunteer.find({}, function (err, items) {
        if (err) {
            console.log(err);
        } else {
            res.render('volunteer_view', { items: items });
        }
    });
});


router.post('/donation', function (req, res) {
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var contact = req.body.contact;
    var address = req.body.address;
    var newitem = { firstname: firstname, lastname: lastname, email: email, contact:contact, address:address }
    Donation.create(newitem, function (err, post) {
        if (err) {
            console.log(err);
        } else {
            console.log(post);
        }
    });
    res.redirect('/');
});

router.get('/donation', function (req, res) {
    Donation.find({}, function (err, items) {
        if (err) {
            console.log(err);
        } else {
            res.render('donation_view', { items: items });
        }
    });
});


module.exports = router