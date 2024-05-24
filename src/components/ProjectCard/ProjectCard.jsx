import React, { useEffect, useState } from 'react';
import './ProjectCard.css';
import Member from '../Members/Member';
import { getAssignedUsers } from '../../service/api.js';

const ProjectCard = ({ project}) => {  
  const [currentProject] = useState(project)
  const [assignedUsers, setAssignedUsers] = useState()
  
  const getCurrentAssignedUsers = () => {
    getAssignedUsers(currentProject.id)
      .then((users) => {
        setAssignedUsers(users.data);
      })
      .catch((error) => {
        console.error('Error fetching assigned users:', error);
      });
  };

  useEffect(() => {
    getCurrentAssignedUsers();
  },[currentProject.id]);
  return (
    
          <div className='dabba' key={currentProject.id}>
            <p className='projName'>{currentProject.name}</p>
            <p className='date'>{currentProject.dueDate}</p>
            <hr className='underline'/>
            <div className='team'>
              <Member imageData = {currentProject.user.image} name = {currentProject.user.name}/>
              
              {assignedUsers && assignedUsers.length > 0 && <hr className='divider'/>} {assignedUsers && assignedUsers.map((user) => (
                <Member paddingRight="3px" key={user.user.uid} imageData={user.user.image} name= {user.user.name} />
              ))}
            </div>
          </div>
  );
}

export default ProjectCard;