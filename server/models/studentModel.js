//studentModel.js
var mongoose = require('mongoose');//schema
var studentSchema = mongoose.Schema({
    name: {    type: String,       },
    email: {       type: String,       required: true   },
    phone: {        type: Number,           },
    address: {        type: String,           },
    created_at: {        type: Date,        default: Date.now    }

});// Export student Model
var student = module.exports = mongoose.model('student', studentSchema);
module.exports.get = function (callback, limit) {
   student.find(callback).limit(limit); 
}