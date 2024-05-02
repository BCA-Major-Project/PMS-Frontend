import '../../pages/Home/Home.css'
import Member from '../../components/Members/Member'

function ProjectCard() {
    return (
      <div className='dabba'>
        <p className='projName'>www.bajari-magi.com</p>
        <p className='date'>Budbar May 01 2024</p>
        <hr className='underline'/>
        <div className='team'>
            <Member />          
        </div>
      </div>
    )
  }
  
  export default ProjectCard
