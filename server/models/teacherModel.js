//teacherModel.js
var mongoose = require('mongoose');//schema
var teacherSchema = mongoose.Schema({
    name: {    type: String,       },
    email: {       type: String,       required: true, unique:true   },
    password: {    type: String,       },
    phone: {        type: Number,           },
    pic:{type:String, default:""},
    status:{type:Boolean,default:true},
    created_at: {        type: Date,        default: Date.now    }

});// Export teacher Model
var teacher = module.exports = mongoose.model('teacher', teacherSchema);
module.exports.get = function (callback, limit) {
   teacher.find(callback).limit(limit); 
}