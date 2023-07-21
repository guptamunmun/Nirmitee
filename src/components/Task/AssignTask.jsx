import React,{useState} from 'react'
import { assignTask } from '../../../../../../backend/controllers/taskControllers';

const User =require("../../../../../../backend/Model/userModel")

function AssignTask(){
  const [assignee, setAssignee] = useState('');

  const handleAssigneeChange = (e) => {
    setAssignee(e.target.value);
  };

  
  const handleAssignTask = (e) => {
    e.preventDefault();
// /tasks/:taskId/assign
  // to send the task assignment request to the backend
  
 const taskId= fetch('/api/tasks/:taskId/assign', {
    method: 'PUT',
    
  })
  assignTask(taskId, assignee)
      .then((data) => {
        console.log('Task assigned successfully:', data);
        // Handle success or display a success message to the user
      })
      .catch((error) => {
        console.error('Error assigning task:', error);
        // Handle error or display an error message to the user
      }); 

<div>
<div>
  <label htmlFor="assignee">Assignee:</label>
  <select id="assignee" value={assignee} onChange={handleAssigneeChange}>
    <option value="">Select an Assignee</option>
    {User.map((user) => (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    ))}
  </select>
</div>
<button type="button" onClick={handleAssignTask}>
  Assign Task
</button>
</div>
}}
export default AssignTask