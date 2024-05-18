import React, { useState, useEffect } from 'react';
import './Users.css';
import { getPublicUsers } from '../../service/api.js';

function Users() {
  const [users, setUsers] = useState([]);
  const [isOnline, setIsOnline] = useState(true); 
  useEffect(() => {
    getUsersDetails();
    // Check network status periodically
    const intervalId = setInterval(() => {
      checkNetworkStatus();
    }, 5000); // Check every 5 seconds (adjust interval as needed)

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const checkNetworkStatus = () => {
    const online = navigator.onLine; // Check if browser reports online status
    setIsOnline(online);
  };

  const getUsersDetails = async () => {
    try {
      const response = await getPublicUsers();
      const updatedUsers = response.data.map(user => ({
        ...user,
      }));
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  return (
    <div className='users'>
      {!isOnline && <div className='offline-indicator'>You are offline</div>}
      {users.map(user => (
        <div key={user.id} className='user'>
          <div>
            <div className={`circle ${user.isOnline==1 ? 'green' : 'red'}`}></div>
          </div>
          <div className='username'>{user.username}</div>
        </div>
      ))}
    </div>
  );
}

export default Users;
