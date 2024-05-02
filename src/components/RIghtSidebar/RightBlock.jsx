import '../../pages/Home/Home.css'
import Users from '../Users/Users'

function RightBlock() {
    return (
        <div className='right common'>
            <div className='heading'>all users</div>
            <Users />
            <Users />
        </div>
    )
  }

  export default RightBlock