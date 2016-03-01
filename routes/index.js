var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
    // TODO: Render the home page template here
    res.render('index', { title: 'Home Page' });
});

/* GET user check in */
router.get('/checkIn/:id', function(req, res) {
    var id = req.params.id;

    // TODO: Determine if user exists and check them in
    console.log('User with ID ' + id + ' checked in.');

    // TODO: Redirect user back to home page with a checked in message
    // TODO: Close the session after some specified amount of time?
    req.flash('info', 'You have checked in!');
    res.redirect('/');
});

/* GET user check out */
router.get('/checkOut/:id', function(req, res) {
   var id = req.params.id;

    // TODO: Determine if user exists and check them out
    console.log('User with ID ' + id + ' checked out.');

    // TODO: Redirect user back to home page with a checked out message, displaying the duration of their session
    // TODO: Close the session?
    req.flash('info', 'You have checked out!');
    res.redirect('/');
    // TODO: Below is the 404 status code
    // res.status(404).send('Page not found!');
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.redirect('/home')
});

///* 404 Route Handler */
//router.get('*', function(req, res) {
//   res.send('error', '404: Page Not Found :(');
//});

module.exports = router;
