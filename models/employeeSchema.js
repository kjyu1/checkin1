var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
​
var employeeSchema = new Schema({
    id: String,
    is_logged_in: Boolean,
    timeIn: Uint32Array,
    timeOut: Uint32Array
});
​
module.exports = mongoose.model('employees', employeeSchema);