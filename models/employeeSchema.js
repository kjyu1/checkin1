var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Page model
var pageSchema = new Schema(
    {
        title: String,
        richTitle: String,
        body: String,
        url: String
    });

module.exports = mongoose.model('pages', pageSchema);