 var mongoose=require("mongoose");
 var Schema = mongoose.Schema;
 var defSchema=new mongoose.Schema({
  name:String,
   image:String,
   score:String,
   value:String
});

module.exports =  mongoose.model("Def",defSchema);