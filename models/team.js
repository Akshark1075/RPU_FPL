
var mongoose=require("mongoose");

var Schema = mongoose.Schema;

var TeamSchema=new mongoose.Schema({
   
   Teamname:String,
   Player1:String,
   Player2:String,
   Player3:String,
   Player4:String,
   Player5:String,
   Player6:String,
   Player7:String,
   Player8:String,
   Player9:String,
   Player10:String,
   Player11:String,
    Score:Number
});

module.exports =  mongoose.model('Team', TeamSchema)