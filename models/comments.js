 var mongoose=require("mongoose");
 var Schema = mongoose.Schema;
 var commentsSchema=new mongoose.Schema({
  author:{username:String,
  id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
  },
   text:String
});

module.exports =  mongoose.model("Comment",commentsSchema);