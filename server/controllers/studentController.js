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
            var add = {}
            add.address_name = formdata.address_name
            add.complete_address = formdata.complete_address
            add.pincode = formdata.pincode

            stuobj.address.push(add)
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
            data1.name = req.body.name
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

exports.address = function(req,res){
    var formdata = req.body
    Student.findOne({_id:formdata._id})
    .then(stuobj=>{
          if(stuobj!=null){
            var data1= {}
            data1.address_name = formdata.address_name
            data1.complete_address = formdata.complete_address
            data1.pincode = formdata.pincode
            stuobj.address.push(data1)
            stuobj.save()
            .then(stuobj=>{
                res.status(200).send({success:true,message:"Address Added",status:200,stu:stuobj})
            })
          }else{
            res.status(404).send({success:false,message:"User Not Exit",status:404})
          }        
        
    })
}
exports.alladdress = function(req,res){
    var formdata = req.body
    Student.findOne({_id:formdata._id})
    .then(stuobj=>{
          if(stuobj!=null){
            res.status(200).send({success:true,message:"Address Added",status:200,stu:stuobj.address})
          }else{
            res.status(404).send({success:false,message:"User Not Exit",status:404})
          }        
        
    })
}


exports.deleteadd = function(req,res){
    var formdata = req.body
    Student.findOne({_id:formdata._id})
    .then(stuobj=>{
          if(stuobj!=null){
            Student.updateOne(
                { address: { $elemMatch: { _id:formdata.addressId} } },
                { $pull: { "address": { _id: formdata.addressId }   } },        
            )
            .then(multiple=>{
                res.status(200).send({success:true,message:"Deleted",status:200})
            })
          }else{
            res.status(404).send({success:false,message:"User Not Exit",status:404})
          }        
        
    })
}


exports.singlestunew = function(req,res){
    Student.findById(req.params.stu_id)
    .then(data=>{
        res.send({success:true,message:"Students",status:200,data:data})
        
    })
}
