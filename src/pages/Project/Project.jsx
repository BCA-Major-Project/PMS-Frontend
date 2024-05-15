import { useState } from 'react'
import LeftBlock from '../../components/LeftSidebar/LeftSidebar.jsx'
import RightBlock from '../../components/RIghtSidebar/RightSidebar.jsx'
import TopNav from '../../components/Navbar/Navbar.jsx'
import Member from '../../components/Members/Member.jsx'
import Comment from '../../components/Comment/Comment.jsx'


import './Project.css'

function Project() {
  return (
    
      <div className='outer-container'>
        <LeftBlock />
        <div className='center common'>
          <TopNav />
          <div className='down'>
            <div className='leftside'>
              <p className='proj-name'>www.bajari-magi.com</p>
              <p className='by'>By Chukki Magi</p>
              <p className='date'>Project due by Budbar May 01 2024</p>
              <p className='detail'>Task take detail a boloooooooo</p>
              <p className='assign-to'>Project assigned to:</p>
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
        </div>
        <RightBlock />
      </div>    
  )
}

export default Project
