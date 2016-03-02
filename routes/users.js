var express = require('express');
var router = express.Router();

///* GET users listing. */
//router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
//});

/* GET user listings */
router.get('/viewlog', function(req, res){
    //var id = req.params.id;
    var id = req.query.idnumber;

    // TODO: Determine if user exists and display their logs
    console.log('User with ID ' + id + ' is viewing their logs.');
    res.render('viewlog', { title: 'Express' });
});

module.exports = router;
