import React, { useState } from 'react';
import { updateStatus } from "../../../../../../backend/controllers/taskControllers";
const UpdateStatus = ({task}) => {
  
  const [status, setStatus] = useState(task.status || 'TO DO'); // Set the initial status from the fetched task data

  // Other event handlers...
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // /api/tasks/:taskId/status
const taskId = fetch('/api/tasks/:taskId/status', {
  method: 'PUT',
  
})
    //  a function called 'update' to send the task status update request to the backend
    updateStatus(taskId, status)
      .then((data) => {
        console.log('Task status updated successfully:', data.task);
        // Handle success or display a success message to the user
      })
      .catch((error) => {
        console.error('Error updating task status:', error);
        // Handle error or display an error message to the user
      });
  };

  return (
    <div>
      {/* Existing form fields... */}
      <div>
        <label htmlFor="status">Status:</label>
        <select id="status" value={status} onChange={handleStatusChange}>
          <option value="TO DO">To Do</option>
          <option value="DOING">Doing</option>
          <option value="DONE">Done</option>
        </select>
      </div>
      <button type="button" onClick={handleUpdate}>
        Update Status
      </button>
    </div>
  );
};

export default UpdateStatus;
