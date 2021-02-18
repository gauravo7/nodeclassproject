Student = require('../models/studentModel')


exports.allstu = function(req,res){
    Student.find().exec()
    .then(data=>{
        
        res.status(200).send({success:true,message:"All Students",status:200,data:data})
    })
}
exports.singlestu = function(req,res){
    Student.findOne({_id:req.body._id})
    .then(data=>{
        res.send({success:true,message:"Students",status:200,data:data})
        
    })
}

exports.addstu = function(req,res){
    var formdata = req.body
    Student.findOne({email:formdata.email})
    .then(data=>{
          if(data==null){
            var stuobj  = new Student();
            stuobj.name = req.body.name
            stuobj.email = req.body.email
            stuobj.phone = req.body.phone
            stuobj.address = req.body.address
            stuobj.save()
            .then(data=>{
                res.status(200).send({success:true,message:"Addded",status:200,stu:data})
            })
          }else{
            res.status(409).send({success:false,message:"Already Exist Email",status:409,stu:[]})
          }        
        
    })
}