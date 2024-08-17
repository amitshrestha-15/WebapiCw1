const jwt = require('jsonwebtoken')
const User = require("../models/User")

exports.isAuth = async(req,res,next)=>{
  let token = "";
    token = token ? token : req?.headers?.authorization;
    token = token?.replace("Bearer ", "");
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Please login first!",
      });
    }

    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    const user = await User.findById(decoded.id)
    if(!user){
      return res.status(400).json({
        success:false,
        message:"user doesn't exist!"
      })
    }

    req.user = user;
    
    next()
}



