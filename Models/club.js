const mongoose = require('mongoose');
const Schema = mongoose.Schema
const clubSchema= new Schema({
  club_id:
  {
    type : String,
    required:true,
    unique:true,
  },
  club_name:
  {
    type : String,
    required:true
  },
  No_of_members:
  {
    type : String,
    required:true
  },
  secretary_name:
  {
    type:String,
    required:true,

  },
  secretary_mobile_no:
  {
    type : String,
    required:true
  },
  secretary_dept:
  {
    type :String,
    required :true,
  },
  },{
   timestamps:true, 
  })
  module.exports = mongoose.model('club',clubSchema)
  