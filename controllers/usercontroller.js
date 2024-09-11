const fs=require('fs');
//It contains only the business logic
const users=require('../users.json');                       // .. is used to import the users.json file into the controller folder
function getAllUsers(req,res){
    //This function will return all users from the database
    res.json(users);
}

function getParticularUser(req,res){
    //This function will return a particular user from the database
    let id=parseInt(req.params.id);
    let user=users.find(user=>user.id===id);
    res.json(user);
}

function addUser(req,res){
    //This function will add a new user to the database
    console.log(req.body);
    let user=req.body;
    user.id=users.length+1;
    users.push(user);
    fs.writeFile('users.json',JSON.stringify(users),(err)=>{
        if(err){
            console.log("Error...")
        }else{
            console.log("User Added successfully");
            res.end("Data added successfully...");
        }
    })
    res.end("Add is in progress...")
}

module.exports={
    getAllUsers,
    getParticularUser,
    addUser
}