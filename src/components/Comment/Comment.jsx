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
          <p className='user-name'>PMS</p>
        </div>
        <p className='comment'>PROJECT MANAGEMENT SYSTEM USING SPRINGBOOT</p>
      </div>
    </div>
    )
  }
  
  export default Comment