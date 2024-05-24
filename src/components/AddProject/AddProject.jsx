import React, { useState, useEffect } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import './AddProject.css';
import { addProject, getUsers } from '../../service/api';

const AddProject = () => {
  const current_user = JSON.parse(localStorage.getItem('user'));
  const [users, setUsers] = useState([]);
  const [projectUsers, setProjectUsers] = useState({
    project: {
      name: '',
      details: '',
      dueDate: '',
      category: 'sales',
      user: {}
    },
    users: []
  });

  useEffect(() => {
    getUsersDetails();
  }, []);

  const getUsersDetails = async () => {
    try {
      const response = await getUsers();
      const currentUser = JSON.parse(localStorage.getItem('user'));
  
      // Filter out the current user from the list of users
      const filteredUsers = response.data.filter(user => user.uid !== currentUser.uid);
  
      setUsers(filteredUsers);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handleCategorySelect = (selectedList) => {
    setProjectUsers((currentState) => ({
      ...currentState,
      users: selectedList
    }));
  };

  const handleCategoryRemove = (removedList) => {
    setProjectUsers((currentState) => ({
      ...currentState,
      users: currentState.users.filter(
        user => !removedList.some(removed => removed.uid === user.uid)
      )
    }));
  };

  const addProjectDetails = async () => {

    setProjectUsers((currentState) => {
      const updatedProjectUsers = {
        ...currentState,
        project: {
          ...currentState.project,
          user: current_user
        }
      };

      (async () => {
        try {
          await addProject(updatedProjectUsers);
          alert(`Project added successfully`);

          // Reset the projectUsers state
          setProjectUsers({
            project: {
              name: '',
              details: '',
              dueDate: '',
              category: 'sales',
              user: {}
            },
            users: []
          });
        } catch (error) {
          console.error("Error adding project:", error);
        }
      })();

      return updatedProjectUsers;
    });
  };

  return (
    <>
      <h1>Create New Project</h1>
      <div className='main'>
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
              />
            </div>

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
              <input
                type="date"
                value={projectUsers.project.dueDate}
                onChange={(e) => setProjectUsers(currentState => ({
                  ...currentState,
                  project: {
                    ...currentState.project,
                    dueDate: e.target.value
                  }
                }))}
              />
            </div>

            <div className='input-addProj'>
              <label htmlFor="projectCategory">Project Category:</label>
              <select
                value={projectUsers.project.category}
                onChange={(e) => setProjectUsers(currentState => ({
                  ...currentState,
                  project: {
                    ...currentState.project,
                    category: e.target.value
                  }
                }))}
              >
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
                selectedValues={projectUsers.users}
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
