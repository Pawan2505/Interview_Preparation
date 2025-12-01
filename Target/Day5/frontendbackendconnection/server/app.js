const express = require('express');
const cors = require('cors')
require('./config/db');
const port = 8000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use('/',require('./routes/TaskRoutes'));
app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return;
    }else{
        console.log("server start at port : ",port);
    }
})