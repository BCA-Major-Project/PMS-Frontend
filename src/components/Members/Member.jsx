import React from 'react';
import './Member.css';

const Member = ({ imageData, name, paddingTop, paddingRight, paddingBottom, paddingLeft }) => {
  const imageStyle = {
    paddingLeft:  paddingLeft || '0px',
    paddingRight: paddingRight || '0px',
    paddingBottom: paddingBottom || '0px',
    paddingTop: paddingTop || '0px'
  };
  const getProfileImage = (data, name) => {
    if (data) {
        return `data:image/jpeg;base64,${data}`;
    } else {
        const nameParams = (name || "Unknown User").split(" ").join("+");
        return `https://ui-avatars.com/api/?name=${nameParams}&background=random`;
    }
  };

  return (
    <div className='image' style={imageStyle}>
      <img src={getProfileImage(imageData,name)} alt='avatar' className='dp' />
    </div>
  );
}

export default Member;