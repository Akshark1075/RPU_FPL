var express=require("express");
var app=express();
var request =require("request");
var ejs=require("ejs");
var passport=require("passport");
var LocalStrategy=require("passport-local");
var passportLocalMongoose=require("passport-local-mongoose");
var Team=require("./models/team.js");
var User=require("./models/user.js");
var Def=require("./models/def.js");
var Fwd=require("./models/fwd.js");
var Mid=require("./models/mid.js");
var Gk=require("./models/gk.js");
var Comment=require("./models/comments.js");
var seedDB=require("./seeds.js");
 var names;
 var P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11;
 var score;
var methodOverride=require("method-override");
var flash=require("connect-flash");
   

 var teamname;
 var team=[];
 var userr;
 
 var first=0;var second=0;var third=0;var fourth=0;var fifth=0;var sixth=0;var seventh=0;var eight=0;var nine=0;var ten=0;var eleven=0;
seedDB();
app.set("view engine","ejs");
var bodyParser=require('body-parser');
app.use(methodOverride("_method"));
app.use(express.static('partials'));
app.use(express.static('public'));
app.use(flash());
var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/rpu");
app.use(require("express-session")({
    secret:"hola",
    resave:false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});


app.use(bodyParser.urlencoded({ extended: true}));
app.use(function(req,res,next){
    res.locals.currentUser=req.user;
    res.locals.error=req.flash("error");
    res.locals.success=req.flash("success")
    next();
});

//app.get("*",function(req,res){
    
//})
function issduplicated(req,res,next){
    var names = [req.body.p1,req.body.p2,req.body.p3,req.body.p4,req.body.p5,req.body.p6,req.body.p7,req.body.p8,req.body.p9,req.body.p10,req.body.p11]

const count = names => 
  names.reduce((a, b) => 
    Object.assign(a, {[b]: (a[b] || 0) + 1}), {})

const duplicates = dict => 
  Object.keys(dict).filter((a) => dict[a] > 1)

//console.log(count(names)) 
//console.log(duplicates(count(names)));
var yoloo=duplicates(count(names));
if(yoloo.length> 0){
 req.flash("error","Oops!!Seems like you have selected the same player more than once")
   res.redirect("back");
}
else
    { next();
    }
}
app.get("/yourteam/:id/edit",isLoggedIn,function(req,res){
    
    Def.find({},function(err,def){
                     if(err){console.log(err)}
                    else
                         {
                             Mid.find({},function(err,mid){
            
                                if(err){console.log(err)}
                                 else
                                     { Fwd.find({},function(err,fwd){
                                          if(err){console.log(err)}
                                            else 
                                            {Gk.find({},function(err,gk){
                                          if(err){console.log(err)}
                                          else
                                          {Team.findById(req.params.id,function(err,team){if(err){console.log(err)}
                                              else { User.findOne({username:req.user.username}).populate("team").exec(function(err,user){
                                               if(err){console.log(err);}
                                               else{if(user.team[0]._id.equals(team._id)){
                                                  res.render("edit",{def:def,mid:mid,fwd:fwd,gk:gk,team:team})
                                         }
                                         else{res.flash("error","You do not have the right to do this");
                                             res.redirect("back")
                                         }
                                                   
                                               }  })}
                                          })
                                           }}) }})
       
       } })
    } })
})
app.put("/yourteam/:id",issduplicated,function(req,res){
   Team.findByIdAndUpdate(req.params.id,{Teamname:req.body.teamname, Player1:req.body.p1, Player2:req.body.p2, Player3:req.body.p3, Player4:req.body.p4, Player5:req.body.p5, Player6:req.body.p6, Player7:req.body.p7, Player8:req.body.p8, Player9:req.body.p9, Player10:req.body.p10, Player11:req.body.p11}
,function(err,team){if(err){console.log(err)}
       else
       {  
           console.log(team)
           req.flash("success","Your team has been successfully updated");
       
           res.redirect("/yourteam")}
   })
})
app.get("/info",function(req,res){
    res.render("info");
});
app.get("/comments",function(req,res){
    Comment.find({},function(err,comments){
        if(err){console.log(err);}
        else{res.render("comments",{comments:comments});  }
    })
 
});
app.post("/comments",function(req,res){
  if(req.user){
       User.findOne({username:req.user.username}).populate("team").exec(function(err,user){
    if(err){console.log(err);}
    else{console.log(user);
   Comment.create({text:req.body.comment},function(err,comment){
       if(err){console.log(err);}
       else{
           comment.author.username=user.username;
             comment.author.id=user._id;
             comment.save();
             user.comments.push(comment);
             user.save();
             req.flash("success","Comment has been successfully created");
             res.redirect("/comments");
       }
   })
    }});
  }
  else{req.flash("error","Oops!! you must first login to do that")
      res.redirect("/login")}
  
});
app.get("/comments/:id/edit",isLoggedIn,function(req,res){
     Comment.findById(req.params.id,function(err,comment){
          if(err){console.log(err);}
else{if(comment.author.id.equals(req.user._id)){
    console.log(comment.text)
    res.render("edit_comment",{comment:comment});
}else{
    req.flash("error","You do not have permission to do that");
    res.redirect("back");
}
    
}
 })   });
 app.put("/comments/:id",function(req,res){
  
 Comment.findByIdAndUpdate(req.params.id,{text:req.body.comment}
,function(err,comment){if(err){console.log(err)}
       else
       {  
           
           req.flash("success","Comment has been successfully updated");
           res.redirect("/comments")}
   })
  
    
 })
app.delete("/comments/:id",isLoggedIn,function(req,res){
   Comment.findById(req.params.id,function(err,comment){
          if(err){console.log(err);}
else{if(comment.author.id.equals(req.user._id)){
    Comment.findByIdAndRemove(req.params.id,function(err){
         if(err){console.log(err);}
    else
    {req.flash("success","Removed comment successfully")
    res.redirect("/comments")}
       }) } 
       else{req.flash("error","You do not have the right to do this");
       res.redirect("back");
           
       } } })
})
app.get("/rpu",function(req,res){
     Def.find({},function(err,def){
                     if(err){console.log(err)}
                    else
                         {
                             Mid.find({},function(err,mid){
            
                                if(err){console.log(err)}
                                 else
                                     { Fwd.find({},function(err,fwd){
                                          if(err){console.log(err)}
                                            else 
                                            {Gk.find({},function(err,gk){
                                          if(err){console.log(err)}
                                          else
                                          {
                                                 { res.render("homepage",{def:def,mid:mid,fwd:fwd,gk:gk})}
                                           }}) }})
       
       } })
    } })
    
   
});
app.get("/signup",function(req,res){
    res.render("signup")
});
app.post("/signup",function(req,res){
   
    console.log(req.body.username);
    console.log(req.body.password);
    console.log(req.body.email);
    User.register(new User({username:req.body.username}),req.body.password,function(err,user){
        if(err){
            console.log(err);
            req.flash("error",err.message)
            return res.render("signup")
            }
            passport.authenticate("local")(req,res,function(){
                req.flash("success","Successfully signed up")
                res.redirect("/pickateam")
            });
    });
});
app.get("/pickateam",isLoggedIn,function(req,res){
 

    
    Def.find({},function(err,def){
                     if(err){console.log(err)}
                    else
                         {
                             Mid.find({},function(err,mid){
            
                                if(err){console.log(err)}
                                 else
                                     { Fwd.find({},function(err,fwd){
                                          if(err){console.log(err)}
                                            else 
                                            {Gk.find({},function(err,gk){
                                          if(err){console.log(err)}
                                          else
                                          {
                                                 {res.render("pick-a-team",{def:def,mid:mid,fwd:fwd,gk:gk})}
                                           }}) }})
       
       } })
    } })
    
});
 
function isduplicated(req,res,next){
     names = [req.body.p1,req.body.p2,req.body.p3,req.body.p4,req.body.p5,req.body.p6,req.body.p7,req.body.p8,req.body.p9,req.body.p10,req.body.p11]

const count = names => 
  names.reduce((a, b) => 
    Object.assign(a, {[b]: (a[b] || 0) + 1}), {})

const duplicates = dict => 
  Object.keys(dict).filter((a) => dict[a] > 1)

//console.log(count(names)) 
//console.log(duplicates(count(names)));
var yolo=duplicates(count(names));
if(yolo.length> 0){
 req.flash("error","Oops!!Seems like you have selected the same player more than once")
   res.redirect("back");
}
else
    {                                                       teamname=req.body.teamname;
    P1=req.body.p1; P2=req.body.p2; P3=req.body.p3; P4=req.body.p4; P5=req.body.p5; P6=req.body.p6; P7=req.body.p7; P8=req.body.p8; P9=req.body.p9; P10=req.body.p10; P11=req.body.p11;
    
                                               //team={pla1: P1,pla2:P2,pla3:P3,pla4:P4,pla5:P5,pla6:P6,pla7:P7,pla8:P8,pla9:P9,pla10:P10,pla11:P11};
                                               
                                            // console.log(P1);
                  //                             console.log(teamname);
             //                               console.log(req.body.teamname)
                                //  team.push(teamname);team.push(P1);team.push(P2);team.push(P3);team.push(P4);team.push(P5);team.push(P6);team.push(P7);team.push(P8);team.push(P9);team.push(P10);team.push(P11);
                                          
                                            // console.log(team);
                         //User.update({username:req.user.username},{$set:{Team:team}})  ;
                        // User.update({username:req.user.username},{$set:{Teamname:teamname}})  ;
                        Team.create({
                            Teamname:teamname,
                            Player1:P1,
                            Player2:P2,
                            Player3:P3,
                            Player4:P4,
                            Player5:P5,
                            Player6:P6,
                            Player7:P7,
                            Player8:P8,
                            Player9:P9,
                            Player10:P10,
                            Player11:P11,
                            Score:0
                        },function(err,teamm){if(err){console.log(err);}
                            else {console.log(teamm);
                            var yoi=String(req.user.username);
                            console.log(yoi);
                            User.findOne({username:yoi},function(err,founduser){
                                if(err){console.log(err);}
                                else
                                {   console.log(founduser);
                                    founduser.team.push(teamm);
                                    founduser.save(function(err,data){
                                        if(err){console.log(err);
                                            
                                        }else {
                                            console.log(data)
                                        }
                                    });
                                }
                            })
                                
                            }
                        });
                             
    next();
}}

app.post("/pickateam",isduplicated,function(req,res){
   // var hh =String(res.locals.currentUser.username)
    

    
    // console.log(userr)
   //  userr.Team=team;
   //userr.Teamname=teamname;
    // userr.save();
     
//}});
 //console.log(userr)
  //  console.log(hh)
//console.log(typeof(hh))
req.flash("success","Awesome!!You are all set to roar")
   res.redirect("/yourteam");
});
app.get("/login",function(req,res){
    res.render("login");
});
app.post("/login", passport.authenticate("local",{
    successRedirect:"/rpu",
    failureRedirect:"/login"
}),function(req,res){
});
app.get("/logout",function(req,res){
    req.logout();
    req.flash("success","Logged out successfully")
    res.redirect("/rpu");
    
});
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
       
        return next();
       
}
  req.flash("error","You have to Login first");
res.redirect("/login");
}


app.get("/yourteam",isLoggedIn,function(req,res){
    User.findOne({username:req.user.username}).populate("team").exec(function(err,user){
    if(err){console.log(err);}
    else{console.log(user);}
    
     
     console.log(user.team[0].Player1)
     Def.findOne({name:user.team[0].Player1},function(err,Pla1){if(err){console.log(err)}else {
         Def.findOne({name:user.team[0].Player2},function(err,Pla2){
             if(err){console.log(err)}else {
               Def.findOne({name:user.team[0].Player3},function(err,Pla3){if(err){console.log(err)}else {
                    Def.findOne({name:user.team[0].Player4},function(err,Pla4){if(err){console.log(err)}else {
                        Mid.findOne({name:user.team[0].Player5},function(err,Pla5){if(err){console.log(err)}else {
                             Mid.findOne({name:user.team[0].Player6},function(err,Pla6){if(err){console.log(err)}else {
                                  Mid.findOne({name:user.team[0].Player7},function(err,Pla7){if(err){console.log(err)}else {
                                      Fwd.findOne({name:user.team[0].Player8},function(err,Pla8){if(err){console.log(err)}else {
                                          Fwd.findOne({name:user.team[0].Player9},function(err,Pla9){if(err){console.log(err)}else {
                                                Fwd.findOne({name:user.team[0].Player9},function(err,Pla9){if(err){console.log(err)}else {
                                                    Fwd.findOne({name:user.team[0].Player10},function(err,Pla10){if(err){console.log(err)}else {
                                                        Gk.findOne({name:user.team[0].Player11},function(err,Pla11){if(err){console.log(err)}else {
                                                            
                                                            

        console.log(Pla1)
        //var previousscore=user.team[0].Score;
        //score=Number( previousscore)+Number(Pla1.score)+ Number(Pla2.score)+Number(Pla3.score)+Number(Pla4.score)+Number(Pla5.score)+Number(Pla6.score)+Number(Pla7.score)+Number(Pla8.score)+Number(Pla9.score)+Number(Pla10.score)+Number(Pla11.score);
        score=Number(Pla1.score)+ Number(Pla2.score)+Number(Pla3.score)+Number(Pla4.score)+Number(Pla5.score)+Number(Pla6.score)+Number(Pla7.score)+Number(Pla8.score)+Number(Pla9.score)+Number(Pla10.score)+Number(Pla11.score);
        console.log(score);
        console.log(typeof(score));
Team.update( { Teamname:user.team[0].Teamname }, { $set: {Score:score}},function(err,hi){
    if(err){console.log(err);}
    else
    {
        console.log(hi)
    }
} );
    res.render("yourteam",{user:user,Pla1:Pla1,Pla2:Pla2,Pla3:Pla3,Pla4:Pla4,Pla5:Pla5,Pla6:Pla6,Pla7:Pla7,Pla8:Pla8,Pla9:Pla9,Pla10:Pla10,Pla11:Pla11});
                                                       }});
                                                    }});
                                                }}); 
                                          }}); 
                                     }}); 
                                  }});
                             }}); 
                       } }); 
                    }});
               }});   
         }}); 
       }}); 
    
   
    
     
     
     
   
     
     
      
        
    })
})

app.get("/pointstable",function(req,res){

    
    
    
     User.find({}).populate("team").exec(function(err,user){
    if(err){console.log(err);}
    else{
    
   
    res.render("pointstable",{user:user})
    }})
})

app.listen(process.env.PORT,process.env.ID,function(){
    console.log ("yoloyoyoyo");
});
