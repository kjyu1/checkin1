/**
 * Created by thanaponsathirathiwat on 3/1/16.
 */
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    var id = req.query.idnumber;
    console.log('received id: ' + id);
    res.render('viewlog');
});

module.exports = router;
