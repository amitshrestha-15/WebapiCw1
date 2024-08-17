const mongoose = require("mongoose") ;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    select:false
  },
  role:{
    type:String,
    enum:["user","admin"],
    default:"user"
  },
},{
  timestamps:true
});

//hashed Password
userSchema.pre("save",async function(next){
  if(!this.isModified("password")){
    next()
  }
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password,salt)
})



//generateAuthToken
userSchema.methods.getJwtToken = function(){
  return jwt.sign({id:this._id},process.env.JWT_SECRET,{
    expiresIn:"1d"
  })

}

//hashedCompare PAssword
userSchema.methods.comparePassword = async function(enteredPassword){
  return await bcrypt.compare(enteredPassword,this.password)
}
module.exports = mongoose.model("User", userSchema);
