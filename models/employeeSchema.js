var mongoose =  require('mongoose'),
    Schema      = mongoose.Schema;

var employeeSchema = new Schema({
    id: String,
    checkedIn: Boolean,
    timeIn: String,
    timeOut: String,
    logs: [{
        date: String,
        duration: String
    }]
});

module.exports = mongoose.model('employees', employeeSchema);