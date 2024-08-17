const mongoose =require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const logSchema = new mongoose.Schema({
 
  logImage: {
   type: String,
   
   },
  tripName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    
  },
  user:{
    type:ObjectId,
    ref:'User'
  }
 });

module.exports= mongoose.model("Log", logSchema);
