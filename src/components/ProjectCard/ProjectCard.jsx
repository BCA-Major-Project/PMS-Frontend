import React, { useEffect, useState } from 'react';
import './ProjectCard.css';
import Member from '../Members/Member';
import { getProject } from '../../service/api.js'; // import the getProject function

function ProjectCard({ filter }) {
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

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'mine') return project.assignedTo === 'currentUser'; // Adjust this condition based on your logic
    return project.category === filter;
  });

  return (
    <div className='project-list'>
      {filteredProjects.map((project) => (
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
