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
   function Totalscore(){   
      User.find({}).populate("team").exec(function(err,user){
         if(err){console.log(err)}
         else{
              user.forEach(function(userr){
                 if(userr.Total!=null){
                 userr.Total=String(Number(userr.Total)+Number(userr.team[0].Score));
              userr.save();
                  }
                  
                     
                  
                  
                  
             })
              
         }
      })
}
// Totalscore();

      
      
      
  Def.remove({},function(err){
      if(err){
          console.log(err);
      }
      else
      {
          console.log("Removed def");
          var data1=[{name:"Sharky",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Adhi",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Sudhar",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"OX",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Arjun",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Rahul",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Sanjeevi",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Yomi",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Rajil",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Jagan",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Kotti",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Vipul",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Hari",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Aathma",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Boomi",image:"/images/demo.jpg",score:"0",value:"5"},
                     {name:"Aravind",image:"/images/demo.jpg",score:"0",value:"5"}
                   
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
          var data2=[{name:"Abijith",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Jeff",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Reva",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Sai",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"China",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Satish",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Bharath",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Praz",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Rohit",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Siva",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Mano",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Barghav",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Vaidhi",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Ash",image:"/images/demo.jpg",score:"0",value:"5"},
                     {name:"Stephen",image:"/images/demo.jpg",score:"0",value:"5"},
                      {name:"Vishnu",image:"/images/demo.jpg",score:"0",value:"5"}
                   
                   
                   
              
             
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
          var data3=[{name:"Kutti",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Andrew",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Venky",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Abishek",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Rajesh",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Sanjith",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Sanjay",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Vinu",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Santosh",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Sudharshan",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Prem",image:"/images/demo.jpg",score:"0",value:"5"},
                     {name:"Naveenjii",image:"/images/demo.jpg",score:"0",value:"5"},
                     {name:"Anwar",image:"/images/demo.jpg",score:"0",value:"5"}
              
              
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
          var data4=[{name:"Vasu",image:"/images/demo.jpg",score:"0",value:"5"},
                   
                    {name:"Maddy",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Ravinder",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Sijin",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Ash",image:"/images/demo.jpg",score:"0",value:"5"},
                    {name:"Sucha",image:"/images/demo.jpg",score:"0",value:"5"}
                    
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