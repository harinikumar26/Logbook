const mongoose = require('mongoose');
const Schema =mongoose.Schema
const staffSchema= new Schema({
    staff_id:
    {
      type : String,
      required:true,
      unique :true,
    },
    staff_name:
    {
      type : String,
      required:true,
    },
    Date_of_birth:
    {
      type : String,
      required:true
    },
    email_id:
    {
      type : String,
      required:true,
      unique:true,
    },
    mobile_no:
    {
    type : Number,
    required :true,
    unique :true,
    },
   address:
    {
      type : String,
      required:true,
    },
    Date_of_joining:
    {
      type : String,
      required:true
    },
    Type:
    {
    type : String,
    required :true
    },
  },{
     timestamps:true,
   })
   module.exports = mongoose.model('staff',staffSchema)