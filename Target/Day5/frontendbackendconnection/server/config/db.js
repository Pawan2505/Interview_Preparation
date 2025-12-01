const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/frontendbackend')

const db = mongoose.connection;

db.once('open',(err)=>{
    if(err){
        console.log(err);
        return;
    }else{
        console.log("db connected successfuly!");
    }
})