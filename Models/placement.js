const mongoose = require('mongoose');
const Schema = mongoose.Schema
const placementSchema= new Schema({
  RegNo:
    {
      type : String,
      required:true,
      unique :true,
    },
    Student_name:
    {
      type : String,
      required:true
    },
    Drive:
    {
      type : String,
      required:true
    },
    Company_name:
    {
      type : String,
      required:true,
    },
    Package:
    {
      type :String,
    required:true,
    },
  },{
    timestamps:true,
  })
  module.exports = mongoose.model('placement',placementSchema)