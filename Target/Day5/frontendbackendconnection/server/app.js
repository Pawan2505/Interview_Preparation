const express = require('express');
require('./config/db');
const port = 8000;

const app = express();

app.use(express.urlencoded());

app.use('/',require('./routes/TaskRoutes'));
app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return;
    }else{
        console.log("server start at port : ",port);
    }
})