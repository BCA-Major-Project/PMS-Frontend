import './AddProject.css'
import '../../../src/App.css'
import '../../../style.css'

import { useState, useEffect } from 'react';
import { addProject, getPublicUsers } from '../../service/api';

const initialValues = {
  uid: 3,
  name: '',
  details: '',
  dueDate: '',
  category: '',
  assignedTo: ''
}

const AddProject = () => {
  const [project, setProject] = useState(initialValues);
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

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
  const onValueChange = (e) => {
    const { id, value } = e.target;
    setProject({ ...project, [id]: value });
  }
  users.forEach(user => {
    console.log(user.id);
  });
  console.log(project);
  console.log(users);
  const addProjectDetails = async () => {
    
      await addProject(project);
      // setSignupSuccess(true);
      alert(`project added succsesfully`);
      setProject(initialValues); // Reset form fields
    
  };
  return (    
          <div className='proj'>
            <h2><b>Create new project</b></h2>
            <div className='details'>
              <formcontrol class='input'>
                <p>Project Name:</p>
                <input type="text" onChange={(e)=> onValueChange(e)} placeholder='Project Name' id='name'/>
              </formcontrol>
              <formcontrol class='input'>
                <p>Description:</p>
                <textarea name="description" onChange={(e)=> onValueChange(e)} placeholder='Project Description' id="details" cols="30" rows="10"></textarea>
              </formcontrol>
              <formcontrol class='input'>
                <p>Due Date:</p>
                <input type="date" onChange={(e)=> onValueChange(e)} id='dueDate'/>
              </formcontrol>
              <formcontrol class='input'>
                <p>Project category:</p>
                <select onChange={(e)=> onValueChange(e)} id="category" name="category">
                  <option value="Development">Development</option>
                  <option value="Design">Design</option>
                  <option value="Sales">Sales</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </formcontrol>
              <formcontrol class='input'>
                <p>Assign to:</p>
                <select onChange={(e)=> onValueChange(e)} id="assignedTo" name="assignedTo">
                {users.map(user => (
                  <option value={user.id}>{user.username}</option>
                ))}
                </select>
              </formcontrol>
              <button className="submit" onClick={addProjectDetails}>Add</button>

            </div>
          </div>
  )
}

export default AddProject
