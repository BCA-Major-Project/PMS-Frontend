import { useState } from 'react'
import Member from '../../components/Members/Member.jsx'
import Comment from '../../components/Comment/Comment.jsx'


import './Project.css'

const Project = ({ project }) => {
  const [currentProject, setCurrentProject] = useState(project);
  const [comments, setComments] = useState([]);

  return (
          <div className='down'>
            <div className='leftside'>
              <p className='proj-name'>{currentProject.name}</p>
              <p className='by'>By {currentProject.user.username}</p>
              <p className='date'>Project due by {currentProject.dueDate}</p>
              <p className='detail'>{currentProject.details}</p>
              <p className='assign-to'>Project Category :{currentProject.category}</p>
              <div className='member'>
                <Member />          
              </div>
            </div>
            <div className='rightside'>
              <p className='heading'>Project comments</p>
              <div className='show-comments'>
                <div className='comment-container'>
                  <Comment />
                  <Comment /> 
                  <Comment /> 
                  <Comment /> 
                  <Comment />
                </div>
              </div>
              <div className='add-comment'>
                <p className='heading'>Add comment</p>
                <form id="comment-form">
                  <textarea id="comment" name="comment" placeholder="Write your comment here..." required></textarea>
                  <button type="submit" className='proj-button'>Comment</button>
                </form>
              </div>
            </div>
          </div>

  )
}

export default Project
