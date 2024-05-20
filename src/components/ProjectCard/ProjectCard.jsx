import React, { useEffect, useState } from 'react';
import './ProjectCard.css';
import Member from '../Members/Member';
import { getProject } from '../../service/api.js';

const ProjectCard = ({ project }) => {
  const [currentProject, setCurrentProject] = useState(project);
  

  return (
    
          <div className='dabba' key={currentProject.id}>
            <p className='projName'>{currentProject.name}</p>
            <p className='date'>{currentProject.details}</p>
            <hr className='underline'/>
            <div className='team'>
              <Member />
            </div>
          </div>
  );
}

export default ProjectCard;