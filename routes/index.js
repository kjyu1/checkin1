var express = require('express'),
    router = express.Router(),
    employeeModel = require('../models/employeeSchema');

/* GET home page */
router.get('/', function(req, res, next) {
    // TODO: Render the home page template here
    res.redirect('/home');
});

/* GET user check in */
router.get('/userCheck', function(req, res) {
    //var id = req.params.id;
    var id  = req.query.idnumber;
    var d   = new Date();

    // Checks if a student ID was entered
    if (id === undefined || id === '') { // If a student ID was not entered
        var messages = {
            notification: 'Please return to the home page and input your student ID number.',
            message: '<a href="/"><button class="btn btn-primary"><span class="fa fa-home"></span></button></a>'
        };

        res.render('notificationPage', messages);
    } else { // If a student ID was entered
        // TODO: Determine if user exists, determine if they are checking in or out
        employeeModel.findOne({id: id}, function(err, docs) {
            if (err) throw err;

            if (!docs) { // If the user does not exist, create a new entry and check them in
                var logs = {
                    timeIn: d.getTime(),
                    timeOut: undefined,
                    duration: undefined
                };
                var newEmployee = new employeeModel({
                    id: id,
                    checkedIn: true,
                    logs: logs
                });

                newEmployee.save(function(err, docs) {
                    if (err) throw err;

                    console.log('New employee with id ' + id + ' created.');
                    console.log('Employee with id ' + id + ' logged in.');
                    var messages = {
                        notification: 'You have checked in.',
                        message: 'Remember to check out when you leave!' +
                        '<br /><br />' +
                        '<a href="/"><button class="btn btn-primary"><span class="fa fa-home"></span></button></a>'
                    };
                    res.render('notificationPage', messages);
                });
            } else { // If the user exists, determine their current status and take appropriate actions
                if (docs.checkedIn) { // If the user is already checked in, check them out
                    // Adding the new data to the array

                    docs.logs[docs.logs.length - 1].timeOut = d.getTime();
                    docs.logs[docs.logs.length - 1].duration = d.getTime() - docs.logs[docs.logs.length - 1].timeIn;

                    var set = {
                        checkedIn: false,
                        logs: docs.logs
                    };

                    employeeModel.update(
                        {id: id},
                        {$set: set},
                        function(err, docs) {
                            if (err) throw err;

                            console.log('Employee with id ' + id + ' checked out.');
                            var messages = {
                                notification: 'You have checked out.',
                                message: 'Have a great day!' +
                                '<br /><br />' +
                                '<a href="/"><button class="btn btn-primary"><span class="fa fa-home"></span></button></a>'
                            };
                            res.render('notificationPage', messages);
                        }
                    );
                } else { // If the user is not checked in, check them in
                    docs.logs.push({
                        timeIn: d.getTime()
                    });

                    var set = {
                        checkedIn: true,
                        logs: docs.logs
                    };

                    employeeModel.update(
                        {id: id},
                        {$set: set},
                        function(err, docs) {
                            if (err) throw err;

                            console.log('Employee with id ' + id + ' checked in.');
                            var messages = {
                                notification: 'You have checked in.',
                                message: 'Remember to check out when you leave!' +
                                '<br /><br />' +
                                '<a href="/"><button class="btn btn-primary"><span class="fa fa-home"></span></button></a>'
                            };
                            res.render('notificationPage', messages);
                        }
                    );
                }
            }
        });
    }
});

module.exports = router;
