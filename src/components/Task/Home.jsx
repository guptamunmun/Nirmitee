import React, { useState } from 'react';
import AssignTask from './AssignTask';
import AddComment  from './AddComment';
import UpdateStatus from './UpdateStatus';


const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  
 

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideo(file);
  };

  
   


  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to send the form data, including the files
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('video', video);

  

    // Send the formData to your backend server using fetch or axios
   
    fetch('/api/tasks', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Task created successfully:', data.task);
        // Handle success or display a success message to the user
      })
      .catch((error) => {
        console.error('Error creating task:', error);
        // Handle error or display an error message to the user
      });

    

    // Reset form fields after submission
    setTitle('');
    setDescription('');
    setImage(null);
    setVideo(null);
    
  };

  return (
    <div>
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} required />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" value={description} onChange={handleDescriptionChange} required />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
        </div>
        <div>
          <label htmlFor="video">Video:</label>
          <input type="file" id="video" accept="video/*" onChange={handleVideoChange} />
        </div>
       
    
        <button type="submit">Create Task</button>
      </form>
     <AssignTask/>
     <AddComment/>
     <UpdateStatus/>
    </div>
  );
};

export default TaskForm
