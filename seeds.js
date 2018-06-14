  var mongoose=require('mongoose');
  var User=require("./models/user.js");
  var Def=require("./models/def.js");
  var Fwd=require("./models/fwd.js");
  var Mid=require("./models/mid.js");
  var Gk=require("./models/gk.js");
  function seedDB(){
    //  User.find({}).populate("team").exec(function(err,user){
     //     if(err){console.log(err);}
      //    else
     //     {user.forEach(function(userr){
     //         if(userr.team[0]){
      //        userr.Total=userr.team[0].Score;
      //        userr.save();
      //        console.log(userr)
      //    }
   //       else {
     //         userr.Total=null;
    //          userr.save();
     //     }
    //      }) 
     //    }
    //  })
    //The upcoming part of code is to be uncommented inorder to update total score
  //   User.find({}).populate("team").exec(function(err,user){
    //     if(err){console.log(err)}
      //  else{
        //    user.forEach(function(userr){
          //     if(userr.Total!=null){
            //      console.log(userr.Total)
              //  userr.Total=String(Number(userr.Total)+Number(userr.team[0].Score));
           //userr.save();
          // console.log(userr);
            //    }
        //})
              
        //}
      //})


      
      
      
  Def.remove({},function(err){
      if(err){
          console.log(err);
      }
      else
      {
          console.log("Removed def");
          var data1=[{name:"Sharky",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Adhi",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Sudhar",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"OX",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Arjun",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Rahul",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Sanjeevi",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Yomi",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Rajil",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Jagan",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Kotti",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Vipul",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Hari",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Aathma",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Boomi",image:"/images/demo.jpg",score:"0",total:"0"},
                     {name:"Aravind",image:"/images/demo.jpg",score:"0",total:"0"}
                   
              ];
              data1.forEach(function(def){
            Def.create(def,function(err){
                  if (err){console.log(err)}
                  else{console.log("Added def")}
              });
      
              });
      }
  });
   Mid.remove({},function(err){
      if(err){
          console.log(err);
      }
      else
      {
          console.log("Removed mid");
          var data2=[{name:"Abijith",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Jeff",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Reva",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Sai",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"China",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Satish",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Bharath",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Praz",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Rohit",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Siva",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Mano",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Barghav",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Vaidhi",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Ash",image:"/images/demo.jpg",score:"0",total:"0"},
                     {name:"Stephen",image:"/images/demo.jpg",score:"0",total:"0"},
                      {name:"Vishnu",image:"/images/demo.jpg",score:"0",total:"0"}
                   
                   
                   
              
             
              ];
               data2.forEach(function(mid){
            Mid.create(mid,function(err){
                  if (err){console.log(err)}
                  else{console.log("Added mid")}
              });
      
              });
      }
  });
   Fwd.remove({},function(err){
      if(err){
          console.log(err);
      }
      else
      {
          console.log("Removed fwd");
          var data3=[{name:"Kutti",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Andrew",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Venky",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Abishek",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Rajesh",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Sanjith",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Sanjay",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Vinu",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Santosh",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Sudharshan",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Prem",image:"/images/demo.jpg",score:"0",total:"0"},
                     {name:"Naveenjii",image:"/images/demo.jpg",score:"0",total:"0"},
                     {name:"Anwar",image:"/images/demo.jpg",score:"0",total:"0"}
              
              
              ];
               data3.forEach(function(fwd){
            Fwd.create(fwd,function(err){
                  if (err){console.log(err)}
                  else{console.log("Added fwd")}
              });
      
              });
      }
  });
  Gk.remove({},function(err){
      if(err){
          console.log(err);
      }
      else
      {
          console.log("Removed gk");
          var data4=[{name:"Vasu",image:"/images/demo.jpg",score:"0",total:"0"},
                   
                    {name:"Maddy",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Ravinder",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Sijin",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Ash",image:"/images/demo.jpg",score:"0",total:"0"},
                    {name:"Sucha",image:"/images/demo.jpg",score:"0",total:"0"}
                    
              ];
               data4.forEach(function(gk){
           Gk.create(gk,function(err){
                  if (err){console.log(err)}
                  else{console.log("Added gk")}
              });
      
              });
      }
  });
  
  }
  module.exports=seedDB;