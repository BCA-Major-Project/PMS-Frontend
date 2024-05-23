import './RightSidebar.css'
import { useState, useEffect } from 'react';
import { getPublicUsers } from '../../service/api.js';
import Users from '../Users/Users'

const RightBlock = () => {
    const [users, setUsers] = useState([]);
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
    useEffect(()=>{
        getUsersDetails();
    },[])
    return (
        <div className='right common'>
            <div className='heading'>All Users</div>
            {users.map((user)=>(
                <Users user={user}/>
            ))}
        </div>
    )
}

export default RightBlock