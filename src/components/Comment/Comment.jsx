import './Comment.css'
import moment from 'moment';
import Member from '../Members/Member'

const Comment = ({ comment }) => {
    const timeAgo = moment(comment.insertionTime).fromNow();
    return (
      <div className='comment-container'>
      <div className='comment-box'>
        <div className='member-name'>
          <div className='member'>
            <Member imageData={comment.user.image} name={comment.user.name} />
          </div>
          <p className='user-name'>{comment.user.username}</p>
          <p className='time'>{timeAgo}</p>
        </div>
        <p className='comment'>{comment.comment}</p>
      </div>
    </div>
    )
  }
  
  export default Comment