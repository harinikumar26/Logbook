const mongoose = require('mongoose');
const Schema = mongoose.Schema
const complaintSchema= new Schema({
  Id:
  {
    type : String,
    required:true,
    unique:true,
  },
  Name:
  {
    type : String,
    required:true,
  },
  Description:
  {
    type:String,
    required:true,
  },
  },{
    timestamps:true,
  })
  module.exports = mongoose.model('complaint',complaintSchema)