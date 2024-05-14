import './Comment.css'
import Member from '../Members/Member'

function Comment() {
    return (
      <div className='comment-container'>
      <div className='comment-box'>
        <div className='member-name'>
          <div className='member'>
            <Member />
          </div>
          <p className='user-name'>Chukki Magi</p>
        </div>
        <p className='comment'>Maja bhenge deboMaja bhenge deboMaja bhenge deboMaja bhenge deboMaja bhenge deboMaja bhenge debo</p>
      </div>
    </div>
    )
  }
  
  export default Comment