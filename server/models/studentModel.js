//studentModel.js
var mongoose = require('mongoose');//schema
var studentSchema = mongoose.Schema({
    name: {    type: String,       },
    email: {       type: String,       required: true, unique:true   },
    phone: {        type: Number,           },
    address:[{
        address_name:{type:String,default:''},
        complete_address:{type:String,default:''},
        pincode:{type:Number,default:0},
        address_status:{type:Boolean,default:true},
        address_added_date:{  type: Date,  default: Date.now    }
    }],
    status:{type:Boolean,default:true},
    created_at: {        type: Date,        default: Date.now    }

});// Export student Model
var student = module.exports = mongoose.model('student', studentSchema);
module.exports.get = function (callback, limit) {
   student.find(callback).limit(limit); 
}