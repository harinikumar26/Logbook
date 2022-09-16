const mongoose = require('mongoose');
const Schema = mongoose.Schema
const studentSchema = new Schema({
    Name:String,
    Regno:Number,
    DOB:String,
    Email:String,
    Mobileno:Number,
    Address:String,
    Bloodgroup:String,
    DOJ:String,
    cgpa:Number
  })
  module.exports = mongoose.model('studentdetail', studentSchema)