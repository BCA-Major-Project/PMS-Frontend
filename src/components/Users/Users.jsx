import React, { useState, useEffect } from 'react';
import './Users.css';
import { getUsers } from "../../service/api.js";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersDetails();
  }, []);

  const getUsersDetails = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  return (
    <div className='users'>
      {users.map((user) => (
        <div key={user.id} className='user'>
          <div className='dp'>
            <div className='circle'></div>
          </div>
          <div className='username'>{user.username}</div>
        </div>
      ))}
    </div>
  );
}

export default Users;
