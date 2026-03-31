const userModel = require("../models/user.model")
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs")


async function registerUser(req,res){


    const {username,email,password,role="user"} = req.body;

    const isUserAlreadyPresent= await userModel.findOne({
        $or:[
            {username:username},
            {email:email}

        ]
    })

    if(isUserAlreadyPresent){
        return res.status(409).json({
            message:"user already exist"
        })
    }
    const hash = await  bcrypt.hash(password,10)

    const user = userModel.create({
        username,
        email,
        password:hash,
        role
    })
    const token = jwt.sign({
        id:user._id,
        role:user.role
    },process.env.JWT_SECRET)

        res.cookie("token",token)


        res.status(200).json({
            message:"user cretaed succesfullly",
            user:{
             id:user._id ,
             username:user.username,
            email:user.email,
            role:user.role

            }
        })
}


module.exports={registerUser}