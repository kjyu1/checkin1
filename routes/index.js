var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
    // TODO: Render the home page template here
    res.redirect('/home');
});

/* GET user check in */
router.get('/userCheck', function(req, res) {
    //var id = req.params.id;
    var id = req.query.idnumber;

    // Checks if a student ID was entered
    if (id === undefined || id === '') {
        var messages = {
            notification: 'Please return to the home page and input your student ID number.',
            message: '<a href="/"><button class="btn btn-primary"><span class="fa fa-home"></span></button></a>'
        };

        res.render('notificationPage', messages);
    }

    // TODO: Determine if user exists, determine if they are checking in or out
    if (true) {
        if (true) { // TODO: Check the user in

            console.log('User with ID ' + id + ' checked in.');
        } else { // TODO Check the user out

            console.log('User with ID ' + id + ' checked out.');
        }
    } else { // TODO: If a user does not exist, create a new database entry for them and check them in

    }

    // TODO: Redirect user back to home page with a checked in message
    // TODO: Close the session after some specified amount of time?
    //req.flash('info', 'You have checked in!');
    //res.redirect('/');
    var messages = {
        notification: 'You have checked in.',
        message: 'Remember to check out when you leave!'
    };
    res.render('notificationPage', messages);
});

///* GET user check out */
//router.get('/checkOut', function(req, res) {
//    //var id = req.params.id;
//    var id = req.query.idnumber;
//
//
//    // TODO: Determine if user exists and check them out
//    console.log('User with ID ' + id + ' checked out.');
//
//    // TODO: Redirect user back to home page with a checked out message, displaying the duration of their session
//    // TODO: Close the session?
//    //req.flash('info', 'You have checked out!');
//    //res.redirect('/');
//    var messages = {
//        notification: 'You have checked out.',
//        message: 'Have a great day!'
//    };
//    res.render('notificationPage', messages);
//
//    // TODO: Below is the 404 status code
//    // res.status(404).send('Page not found!');
//});

///* GET home page. */
//router.get('/', function(req, res, next) {
//    res.redirect('/home')
//});

///* 404 Route Handler */
//router.get('*', function(req, res) {
//   res.send('error', '404: Page Not Found :(');
//});

module.exports = router;
