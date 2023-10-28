const jwt = require("jsonwebtoken")
const User = require("../models/User")
const bcrypt=require("bcrypt")


exports.signup = async (req,res,next)=>{

    const {name , email,password,firstName,lastName,role}=req.body
    const userExist = await User.findOne({email})
    if(userExist)
    {
        res.status(400)
        throw new Error("User already exist")
    }
    const salt=await bcrypt.genSalt(10)
    const HashedPassword=await bcrypt.hash(password,salt )
    const user = await User.create({
        name,
        email,
        password:HashedPassword,
        firstName,
        lastName,
        role
    })
    if(user){
        res.status(201).json({
            _id:user._id,
      
        }) 
  
    }else{
        res.status(400).json({message:"invalid user data"})
        throw new Error("invalid user data")
    }
   
}

exports.login = async (req,res,next) =>{
    const {email,password}=req.body
    const user = await User.findOne({email})
    if (user && (await bcrypt.compare(password,user.password)))
    {     res.json({
            token:  
            jwt.sign({id:user._id},process.env.JWT_SECRET,{
                expiresIn:"30d"
            })
    })
    }else{
        res.status(401).json({message:"Invalid email or password"})
      //  throw new Error("Invalid email or password")
    }


}