Teacher = require('../models/teacherModel')
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');

exports.alltech = function(req,res){
    Teacher.find().exec()
    .then(data=>{        
        res.status(200).send({success:true,message:"All teachers",status:200,data:data})
    })
}
exports.login = function(req,res){
    Teacher.findOne({email:req.body.email}).exec()
    .then(data=>{       
        if(data!=null){
            if(bcrypt.compareSync(req.body.password, data.password)) {
                var privateKey = '132ABR2'
                var mydata = {
                    _id:data._id,
                    name:data.name
                }
                jwt.sign({
                    exp: Math.floor(Date.now() / 1000) + (60 * 60*24*365),
                    data: mydata
                  }, privateKey,
                  function(err,token){
                    console.log(err)
                    console.log(token)
                    res.status(200).send({success:true,message:"Sucess",status:200,data:data,token:token})

                });
            }
            else{
                res.status(403).send({success:true,message:"Invalid Username Password",status:403,data:[]})
            }
        } else{
            res.status(404).send({success:true,message:"Not Exist",status:404,data:data})
            
        }
    })
}
exports.singletech = function(req,res){
    Teacher.findOne({_id:req.body._id})
    .then(data=>{
        res.send({success:true,message:"teachers",status:200,data:data})
        
    })
}


exports.deletetech = function(req,res){
    Teacher.findOne({_id:req.body._id})
    .then(data=>{
        if(data!=null){
            Teacher.deleteOne({_id:req.body._id})
            .then(data=>{
                console.log(data)
            })
            .catch(err=>{
                console.log(err)
            })
            res.status(200).send({success:true,message:"teacher Deleted",status:200})

        }
        else{
            res.status(404).send({success:false,message:"No teacher Found",status:404})

        }
    })
}

exports.addteacher = function(req,res){
    var formdata = req.body
    
    Teacher.findOne({email:formdata.email})
    .then(data=>{
          if(data==null){
              if(req.body.password!=undefined && req.body.password!=null&& req.body.password!=""){ 
                var techobj  = new Teacher();
                techobj.name = req.body.name
                techobj.email = req.body.email
                
                const salt = bcrypt.genSaltSync(saltRounds);
                const hash = bcrypt.hashSync(req.body.password, salt);
                techobj.password = hash
                techobj.phone = req.body.phone
                if(req.file!=undefined){
                    var image = req.file
                    techobj.pic = "teacher/"+image.filename;
                }
                else{
                    techobj.pic="teacher/default.jpg"
                }
                techobj.save()
                .then(data=>{
                    res.status(200).send({success:true,message:"Addded",status:200,tech:data})
                })
            }
            else{
                res.status(409).send({success:false,message:"Please Enter password",status:400,tech:[]})
            }
          }else{
            res.status(409).send({success:false,message:"Already Exist Email",status:409,tech:[]})
          }        
        
    })
}
