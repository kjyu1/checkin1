/**
 * Created by thanaponsathirathiwat on 3/1/16.
 */
var express = require('express');
var router = express.Router();
var employeeModel = require('../models/employeeSchema');
var moment = require('moment');


/* GET home page. */
router.get('/', function(req, res, next) {

    var id = req.query.idnumber;

    // Checks if a student ID was entered
    if (id === undefined || id === '') { // If a student ID was not entered
        var messages = {
            notification: 'Please return to the home page and input your student ID number.',
            message: ''
        };
        res.render('notificationPage', messages);
    }

    employeeModel.find({id: id}, function(err, docs){
        if (err) throw err;
        if(docs.length > 0){
            var info = [];
            for (var i = 0; i < docs[0].logs.length;i++) {
                var start = moment(docs[0].logs[i].timeIn).format('hh:mm a');
                var end = moment(docs[0].logs[i].timeOut).format('hh:mm a');
                var hours = moment.duration(docs[0].logs[i].duration).hours();
                var  minutes = moment.duration(docs[0].logs[i].duration).minutes()%60;
                var date = moment(docs[0].logs[i].timeIn).format('l');

                hours = (hours === 0 ? ' ' : hours + ' h ');
                info[i] = {
                    starttime: start,
                    endtime: end,
                    duration: hours +minutes +" m",
                    date: date
                }
            }
            //console.log(info);
            res.render('viewlog', {employeeID: id, employeeInfo: info });
        }else{
            var messages = {
                notification: 'You have entered an ID that does not exist in our database.',
                message: 'ID: '+id+' was entered.  Please make sure the ID is correct.'
            };
            res.render('notificationPage', messages);
        }
    });
});

module.exports = router;
