import './Comment.css'
import Member from '../Members/Member'

const Comment = ({ comment }) => {
    return (
      <div className='comment-container'>
      <div className='comment-box'>
        <div className='member-name'>
          <div className='member'>
            <Member />
          </div>
          <p className='user-name'>{comment.user.username}</p>
        </div>
        <p className='comment'>{comment.comment}</p>
      </div>
    </div>
    )
  }
  
  export default Comment