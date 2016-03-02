/**
 * Created by thanaponsathirathiwat on 3/1/16.
 */
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('main');
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
