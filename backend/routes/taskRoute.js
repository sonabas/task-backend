const express = require("express");
const Task = require("../models/taskModel");
const { createTask, getTasks,getTask, deleteTask, updateTask } = require("../controllers/taskController");
const router=express.Router()

//router.route("/").get(getTasks).post(createTask)
//router.route("/:id").get(getTask).delete(deleteTask).put(updateTask)

//create a task
router.post("/",createTask);

// Get/Read Tasks
router.get("/",getTasks);

router.get("/:id",getTask);

router.delete("/:id",deleteTask);

router.put("/:id",updateTask);

module.exports=router
