import React, { useState, useEffect } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import './AddProject.css';
import { addProject, getPublicUsers } from '../../service/api';

const AddProject = () => {
  const [project, setProject] = useState({
    name: '',
    details: '',
    dueDate: '',
    category: '',
    assignedTo: []
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersDetails();
  }, []);

  const getUsersDetails = async () => {
    try {
      const response = await getPublicUsers();
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handleCategorySelect = (selectedList) => {
    const assignedToIds = selectedList.map(user => user.id);
    setProject({ ...project, assignedTo: assignedToIds });
  };

  const handleCategoryRemove = (removedList) => {
    const remainingAssignees = project.assignedTo.filter(
      userId => !removedList.some(removed => removed.id === userId)
    );
    setProject({ ...project, assignedTo: remainingAssignees });
  };

  const addProjectDetails = async () => {
    try {
      await addProject(project);
      alert(`Project added successfully`);
      setProject({
        name: '',
        details: '',
        dueDate: '',
        category: '',
        assignedTo: []
      }); // Reset form fields
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  return (
    <>
      <h1>Create New Project</h1>
      <div class='main'>
      
      <div className='proj'>
        
        <div className='details'>

          <div className='input-addProj'>
            <label htmlFor="projectName">Project Name:</label>
            <input type="text" value={project.name} onChange={(e) => setProject({ ...project, name: e.target.value })} placeholder='Enter Project Name' />
          </div>

          <div className='input-addProj textarea'>
            <label htmlFor="description">Description:</label>
            <textarea
              value={project.details}
              onChange={(e) => setProject({ ...project, details: e.target.value })}
              placeholder='Enter Project Description'
            ></textarea>
          </div>

          <div className='input-addProj projDate'>
            <label htmlFor="dueDate">Due Date:</label>
            <input type="date" value={project.dueDate} onChange={(e) => setProject({ ...project, dueDate: e.target.value })} />
          </div>

          <div className='input-addProj'>
            <label htmlFor="projectCategory">Project Category:</label>
            <select value={project.category} onChange={(e) => setProject({ ...project, category: e.target.value })}>
              <option value="Development">Development</option>
              <option value="Design">Design</option>
              <option value="Sales">Sales</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>
          
          <div className='input-addProj'>
            <label htmlFor="assignTo">Assign to:</label>
            <Multiselect
              options={users}
              selectedValues={users.filter(user => project.assignedTo.includes(user.id))}
              onSelect={handleCategorySelect}
              onRemove={handleCategoryRemove}
              displayValue="username"
              placeholder="Select Assignees"
              className='multiselect'
            />
          </div>

          <div className='add-button'>
            <button className="submit" onClick={addProjectDetails}>Add Project</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AddProject;
