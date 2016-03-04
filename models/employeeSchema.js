var mongoose =  require('mongoose'),
    Schema      = mongoose.Schema;

var employeeSchema = new Schema({
    id: String,
    checkedIn: {type: Boolean, default: false},
    logs: [{
        timeIn: {type: Number, default: Date.now},
        timeOut: {type: Number, default: null},
        duration: {type: Number, default: 0}
    }]
});

module.exports = mongoose.model('employees', employeeSchema);