
var mongoose=require("mongoose");
var passportLocalMongoose=require("passport-local-mongoose");
var Schema = mongoose.Schema;

var UserSchema=new mongoose.Schema({
    username:String,
    password:String,
    team:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Team"
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }]
});
UserSchema.plugin(passportLocalMongoose);
module.exports =  mongoose.model('User', UserSchema)