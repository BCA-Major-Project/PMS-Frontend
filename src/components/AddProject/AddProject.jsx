import React, { useState, useEffect } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import './AddProject.css';
import { addProject, getUsers, getPublicUsers } from '../../service/api';

const AddProject = () => {
  const [projectOBJ, setProjectOBJ] = useState({
    name: '',
    details: '',
    dueDate: '',
    category: ''
  });
  const [users, setUsers] = useState([]);
  const [projectUsers, setProjectUsers] = useState({
    project : {
      name: '',
      details: '',
      dueDate: '',
      category: 'sales'
    },
    users: []
  });

  useEffect(() => {
    getUsersDetails();
  }, []);

  const getUsersDetails = async () => {
    try {
      // const response = await getPublicUsers();
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handleCategorySelect = (selectedList) => {
    const assignedToIds = selectedList.map(user => user);
    setProjectUsers({ ...projectUsers, users: assignedToIds });
  };

  const handleCategoryRemove = (removedList) => {
    const remainingAssignees = projectUsers.users.filter(
      user => !removedList.some(removed => removed.id === user.id)
    );
    setProjectUsers({ ...projectUsers, users: remainingAssignees });
  };

  const addProjectDetails = async () => {
    console.log("Raw project without users : ", projectOBJ)
    setProjectUsers(currentState => ({
     ...currentState,
     project: {
       name: projectOBJ.name,
       details: projectOBJ.details,
       dueDate: projectOBJ.dueDate,
       category: projectOBJ.category
     }
   }));   try {
      await addProject(projectUsers);
      alert(`Project added successfully`);
      setProjectOBJ({
        name: '',
        details: '',
        dueDate: '',
        category: ''
      });
      setProjectUsers({
        project : {
          name: '',
          details: '',
          dueDate: '',
          category: 'sales'
        },
        users: []
      }) // Reset form fields
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
            <input
  type="text"
  value={projectUsers.project.name}
  onChange={(e) => setProjectUsers(currentState => ({
    ...currentState,
    project: {
      ...currentState.project,
      name: e.target.value
    }

  }))}
  
  placeholder='Enter Project Name'
/>          </div>

          <div className='input-addProj textarea'>
            <label htmlFor="description">Description:</label>
            <textarea
              value={projectUsers.project.details}
              onChange={(e) => setProjectUsers(currentState => ({
                ...currentState,
                project: {
                  ...currentState.project,
                  details: e.target.value
                }
                
              }))}
              placeholder='Enter Project Description'
            ></textarea>
          </div>

          <div className='input-addProj projDate'>
            <label htmlFor="dueDate">Due Date:</label>
            <input type="date" value={projectUsers.project.dueDate} onChange={(e) => setProjectUsers(currentState => ({
    ...currentState,
    project: {
      ...currentState.project,
      dueDate: e.target.value
    }
    
  }))}/>
          </div>

          <div className='input-addProj'>
            <label htmlFor="projectCategory">Project Category:</label>
            <select value={projectUsers.project.category} onChange={(e) => setProjectUsers(currentState => ({
    ...currentState,
    project: {
      ...currentState.project,
      category: e.target.value
    }
    
  }))}>
              <option value="development">Development</option>
              <option value="design">Design</option>
              <option value="sales">Sales</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
          
          <div className='input-addProj'>
            <label htmlFor="assignTo">Assign to:</label>
            <Multiselect
              options={users}
              selectedValues={users.filter(user => projectUsers.users.includes(user))}
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
