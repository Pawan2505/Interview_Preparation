
const TaskModel = require('../models/Task');


module.exports.getTasks = async(req,res)=>{

    const tasks = await TaskModel.find();
    res.json(tasks);
    
}

module.exports.addTask = async(req,res)=>{

    const task = new TaskModel({title: req.body.title});
    await task.save();

    res.json({message: "Task added successfully", task})

}