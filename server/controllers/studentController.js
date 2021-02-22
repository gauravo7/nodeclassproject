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


exports.deletestu = function(req,res){
    Student.findOne({_id:req.body._id})
    .then(data=>{
        if(data!=null){
            Student.deleteOne({_id:req.body._id})
            .then(data=>{
                console.log(data)
            })
            .catch(err=>{
                console.log(err)
            })
            res.status(200).send({success:true,message:"Student Deleted",status:200})

        }
        else{
            res.status(404).send({success:false,message:"No Student Found",status:404})

        }
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

exports.editstu2 = function(req,res){
    Student.findOne({_id:req.body._id})
    .then(data=>{
        if(data!=null){
            data.name = req.body.name
            data.phone = req.body.phone
            data.address = req.body.address
            data.save()
            res.status(200).send({success:true,message:"Student Updated",status:200})

        }
        else{
            res.status(404).send({success:false,message:"No Student Found",status:404})

        }
    })
}

exports.editstu = function(req,res){
    Student.findOne({_id:req.body._id})
    .then(data=>{
        if(data!=null){
            var editdata = {}
            if(req.body.name!=undefined)
                editdata.name = req.body.name
            if(req.body.phone!=undefined)
                editdata.phone = req.body.phone
            if(req.body.address!=undefined)
                editdata.address = req.body.address
            Student.updateOne({_id:req.body._id},editdata)
            .then(data=>{
                console.log(data)
            })
            .catch(err=>{
                console.log(err)
            })
            res.status(200).send({success:true,message:"Student Updated",status:200})

        }
        else{
            res.status(404).send({success:false,message:"No Student Found",status:404})

        }
    })
}