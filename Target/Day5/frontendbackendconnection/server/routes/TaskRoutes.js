const express = require('express');
const TaskController = require('../controllers/TaskControlller')

const router = express.Router();


console.log("Routing...");

router.get('/getTasks',TaskController.getTasks)
router.post('/addTask',TaskController.addTask)

module.exports = router