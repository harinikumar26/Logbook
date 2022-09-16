const mongoose = require('mongoose');
const Schema = mongoose.Schema
const staffSchema= new Schema({
    staff_id:
    {
      type : String,
      required:true
    },
    staff_name:
    {
      type : String,
      required:true
    },
    Check_out_time:
    {
      type : String,
      required:true
    },
    Check_in_time:
    {
      type : String,
      required:true
    },
    Date:
    {
      type : String,
      required:true,
    }
  },
  {
    timestamps:true,
  })
module.exports=mongoose.model('staffcheck',staffSchema)