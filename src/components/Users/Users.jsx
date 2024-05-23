import React from 'react';
import './Users.css';

const Users = ({ user }) => {
    // Check if the user object is properly passed to the component
    if (!user) {
        console.log('No user data available');
        return <div>No user data available</div>;
    }

    const imageData = user.image;
    const username = user.username;
    const isOnline = user.isOnline;
    const id = user.id;
    
    const getProfileImage = () => {
        if (imageData) {
            return `data:image/jpeg;base64,${imageData}`;
        } else {
            const nameParams = (username || "Unknown User").split(" ").join("+");
            return `https://ui-avatars.com/api/?name=${nameParams}&background=random`;
        }
    };

    return (
        <div className='users'>
            <div key={id} className='user'>
                <div>
                    <div className={`circle ${isOnline ? 'green' : 'red'}`}></div>
                </div>
                <div className='username'>{username || "Unknown"}</div>
                <img src={getProfileImage()} alt={`${username || "User"}'s avatar`} />
            </div>
        </div>
    );
}

export default Users;