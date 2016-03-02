/**
 * Created by thanaponsathirathiwat on 3/1/16.
 */
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('viewlog');
    //var id = req.body.idnumber;
    //console.log('receive id: ' + id);
});

module.exports = router;
