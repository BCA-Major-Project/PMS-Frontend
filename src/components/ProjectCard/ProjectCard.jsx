import React, { useEffect, useState } from 'react';
import './ProjectCard.css';
import Member from '../Members/Member';
import { getProject } from '../../service/api.js'; // import the getProject function

function ProjectCard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProject();
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className='project-list'>
      {projects.map((project) => (
        <div className='dabba' key={project.id}>
          <p className='projName'>{project.name}</p>
          <p className='date'>{project.details}</p>
          <hr className='underline'/>
          <div className='team'>
            <Member />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
