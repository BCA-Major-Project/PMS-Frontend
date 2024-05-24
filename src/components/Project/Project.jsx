import React, { useState, useEffect } from 'react';
import Member from '../../components/Members/Member.jsx';
import Comment from '../../components/Comment/Comment.jsx';
import { addComment as apiAddComment, getComments } from '../../service/api.js';
import Dashboard from '../../components/Dashboard/Dashboard'; // Import the Dashboard component

import './Project.css';
import { FormControl } from '@mui/material';

const initialValues = {
  user:'',
  project:'',
  comment:'',
  insertionTime:''
};



const Project = ({ project }) => {
  // const [currentProject, setCurrentProject] = useState(project);
  const [comments, setComments] = useState([]);
  const [showDashboard, setShowDashboard] = useState(false); // State to control rendering of Dashboard
  const [comment,setComment] = useState(initialValues);

  const getAllComments = async (pid) => {
    try {
      const response = await getComments(pid);
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };
  const onValueChange = (e) => {
    const { id, value } = e.target;
    setComment({ ...comment, [id]: value });
  };

  useEffect(() => {
    getAllComments(project.id);
  }, [project.id]);

  const redirectToDashboard = () => {
    setShowDashboard(true); // Show Dashboard component
  };

  if (showDashboard) {
    return <Dashboard />; 
  }

  
  const addComment = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const user = JSON.parse(localStorage.getItem("user"));
    const dateTime = new Date();
    const formattedDateTime = dateTime.getFullYear() + '-' +
      ('0' + (dateTime.getMonth() + 1)).slice(-2) + '-' +
      ('0' + dateTime.getDate()).slice(-2) + ' ' +
      ('0' + dateTime.getHours()).slice(-2) + ':' +
      ('0' + dateTime.getMinutes()).slice(-2) + ':' +
      ('0' + dateTime.getSeconds()).slice(-2)
      
    const updatedComment = {
        ...comment,
        project: project,
        user: user,
        insertionTime: formattedDateTime
    };

    try {
        await apiAddComment(updatedComment);
        setComment(initialValues);
        getAllComments(project.id);
    } catch (error) {
        console.error('Error adding comment:', error);
    }
};


  return (
    <div className="outer-container">
      <div className="back-button-container">
        <button className="back-button" onClick={redirectToDashboard}>
          Back
        </button>
      </div>
      <div className="project-center">
        <div className="down">
          <div className="leftside">
            <p className="proj-name">{project.name}</p>
            <p className="by">By {project.user.username}</p>
            <p className="date">Project due by {project.dueDate}</p>
            <p className="detail">{project.details}</p>
            <p className="assign-to">Project Category: {project.category}</p>
            <div className="member">
              <Member />
            </div>
          </div>
          <div className="rightside">
            <p className="heading">Project comments</p>
            <div className="show-comments">
              <div className="comment-container">
                {comments.map((comment, index) => (
                  <Comment key={index} comment={comment} />
                ))}
              </div>
            </div>
            <div className="add-comment">
              <p className="heading">Add comment</p>
              <FormControl id="comment-form">
                  <textarea 
                      onChange={onValueChange} 
                      id="comment" 
                      name="comment" 
                      value={comment.comment} // Bind textarea value to state
                      placeholder="Write your comment here..." 
                      required
                  ></textarea>
                  <button onClick={(e) => addComment(e)} className="proj-button">Comment</button>
              </FormControl>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;