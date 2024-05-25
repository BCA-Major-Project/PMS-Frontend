import React, { useState, useEffect } from 'react';
import './Dashboard.css';

import Project from "../Project/Project"
import ProjectCard from '../ProjectCard/ProjectCard';
import { getProjectByCategory, getProjectById, getProject, getAssignedProjects} from '../../service/api';

function Dashboard() {
    const [user, setUser] = useState();
    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const handleProjectSelect = (project) => {
        setSelectedProject(project);
    };
    const handleBackToDashboard = () => {
        setSelectedProject(null);
    };

    useEffect(() => {
        const getUserFromStorage = () => {
            const userDataString = localStorage.getItem("user");
            setUser(JSON.parse(userDataString));
        };
        getUserFromStorage();
    }, []); // This useEffect runs only once on component mount

    useEffect(() => {
        const fetchProjects = async (category) => {
            try {
                let response;
                if (category === "all") {
                    response = await getProject();
                } else if (category === "mine") {
                    response = await getProjectById(user?.uid);
                }else if (category === "assigned") {
                    response = await getAssignedProjects(user?.uid);
                } else {
                    response = await getProjectByCategory(category);
                }
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };
        if (user) {
            fetchProjects(filter);
        }
    }, [filter, user]); // This useEffect runs when `filter` or `user` changes

    return (
        <> 
            
                <div className="filter-parent">
                {selectedProject === null && (
                <div className='filter'>
                        <p className='filterBy'>Filter by:</p>
                        <p className={`options ${filter === 'all' ? 'highlight' : ''}`} onClick={() => handleFilterChange('all')}>all</p>
                        <p className={`options ${filter === 'mine' ? 'highlight' : ''}`} onClick={() => handleFilterChange('mine')}>mine</p>
                        <p className={`options ${filter === 'assigned' ? 'highlight' : ''}`} onClick={() => handleFilterChange('assigned')}>assigned</p>
                        <p className={`options ${filter === 'development' ? 'highlight' : ''}`} onClick={() => handleFilterChange('development')}>development</p>
                        <p className={`options ${filter === 'design' ? 'highlight' : ''}`} onClick={() => handleFilterChange('design')}>design</p>
                        <p className={`options ${filter === 'marketing' ? 'highlight' : ''}`} onClick={() => handleFilterChange('marketing')}>marketing</p>
                        <p className={`options ${filter === 'sales' ? 'highlight' : ''}`} onClick={() => handleFilterChange('sales')}>sales</p>
                    </div>
                    )}
            </div>
            
            <div className='content'>
                {selectedProject ? (
                    <Project project={selectedProject} onBack={handleBackToDashboard} />
                ) : (
                    projects.length > 0 ? (
                        projects.map(project => (
                            <div className='project-card-container' onClick={() => handleProjectSelect(filter === 'assigned' ? project.project : project)} key={project.id}>
                                <ProjectCard project={filter === 'assigned' ? project.project : project}/>
                            </div>
                        ))
                    ) : (
                        <p className='not_found'>No projects found</p>
                    )
                )}
            </div>
        </>
    );
}

export default Dashboard;
