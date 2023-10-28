const jwt=require("jsonwebtoken")
const User = require("../models/User");

const isLogged= ( async (req,res,next)=>{

    const token= req.headers.authorization.split(" ")[1]

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer") )
    {
        try {
            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            req.user=await User.findById(decoded.id).select("-password")
            console.log(req.user)
            next()
            
        } catch (error) {
            res.status(401).json({message:error.message})

        }
    }
    if(!token)
    {
        res.status(401).json({message:"not authorized "})
    }

})

const isAdmin=(req,res,next)=>{
    console.log("za")
    if( req.user.role==="admin"){
        next()
    }else{
        res.status(403).json({message:"not authorized as an admin"})

    }
}
module.exports={isLogged,isAdmin}