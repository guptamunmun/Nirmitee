
const path = require('path');
const taskModel =require("../Model/TaskModel")
const userModel=require("../Model/userModel")

const createTask = async (req,res)=>{
    try {
        const { title, description } = req.body;
        const { image, video } = req.files;
        // Create a new task
        const task = new Task({
          title,
          description,
          creator: req.user._id, // Assuming you have set up authentication middleware
          image: image ? image[0].path : '', // Store the image file path in the 'image' field
          video: video ? video[0].path : '', // Store the video file path in the 'video' field
          comments: [], // Initialize comments as an empty array
        });
  
        // Save the task to the database
        await task.save();
  
        return res.status(201).json({ message: 'Task created successfully', task });
      } catch (err) {
        console.error('Error creating task:', err);
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  
   

const assignTask =async(req,res)=>{
try{
    const { taskId, assigneeId } = req.body;
    const task = await taskModel.findById(taskId);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    const assigneeExists = await userModel.findById(assigneeId);
    if (!assigneeExists) {
      return res.status(404).json({ error: 'Assignee not found' });
    }

    
    task.assignee = assigneeId;
    await task.save();

    return res.status(200).json({ message: 'Task assigned successfully', task });
}catch(err){
    res.send(err.message)
}
}
const updateStatus=async(req,res)=>{
try{
     const { taskId, status } = req.body;


  
  const task = await taskModel.findById(taskId);
  if (!task) 
    return res.status(404).json({ error: 'Task not found' });
  
  task.status = status;
  task.history.push({ status, timestamp: Date.now() }); 
  await task.save();

  return res.status(200).json({ message: 'Task status updated successfully', task });


}catch(err){
    res.send(err.message)
}
}






const addComments=async(req,res)=>{
    const { taskId, content } = req.body;

    try {
      
      const task = await taskModel.findById(taskId);
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
  
      const userId = req.user._id;
  
      // Create a new comment object
      const newComment = {
        user: userId,
        content,
      };
  
      // Add the new comment to the task's comments array
      task.comments.push(newComment);
  
      // Save the updated task with the new comment
      await task.save();
  
      return res.status(200).json({ message: 'Comment added successfully', task });
    } catch (err) {
      console.error('Error adding comment to task:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

module.exports={ createTask,assignTask,updateStatus,addComments}