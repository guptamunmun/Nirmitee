import React,{useState} from 'react';

const AddComment =()=>{
    const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (comment.trim() === '') {
      return;
    }
    setComments([...comments, comment]);
    setComment('');
  };
 <div>
    <label htmlFor="comment">Comment:</label>
    <input type="text" id="comment" value={comment} onChange={handleCommentChange} />
    <button type="button" onClick={handleAddComment}>Add Comment</button>
  </div>
 
  {comments.length > 0 && (
    <div>
      <h3>Comments:</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
        )} 
}
export default AddComment