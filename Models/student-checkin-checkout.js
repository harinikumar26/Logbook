const mongoose = require('mongoose');
const Schema = mongoose.Schema
const attendanceSchema = new Schema({
    Name:String,
    Regno:Number,
    Date:String,
    checkintime:String,
    checkouttime:String
  })
  module.exports = mongoose.model('studentlog', attendanceSchema)