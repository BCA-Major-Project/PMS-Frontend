import './RightSidebar.css'
import Users from '../Users/Users'

function RightBlock() {
    return (
        <div className='right common'>
            <div className='heading'>All Users</div>
            <Users/>
        </div>
    )
  }

  export default RightBlock