/**
 * Created by thanaponsathirathiwat on 3/1/16.
 */
var express = require('express'),
    router = express.Router(),
    employeeModel = require('../models/employeeSchema');


/* GET home page. */
router.get('/', function(req, res, next) {
    var employeeIDs = [];

    // Gathering the IDs of all the students in the database and passing it to the main page template
    employeeModel.find(
        { },
        function(err, docs) {
            docs.forEach(function(employee) {
                employeeIDs.push(employee.id);
            });

            res.render('main', { employees: employeeIDs});
        }
    );
});

router.get('/login', function (req, res, next) {
    res.redirect('/home');
});

/*
router.get('/home', function(req, res, next) {
    res.render('main', { title: 'Express' });
});
*/

module.exports = router;
