import './ProjectCard.css'
import Member from '../Members/Member'

function ProjectCard() {
    return (
      <div className='dabba'>
        <p className='projName'>Our Project</p>
        <p className='date'>Wed May 01 2024</p>
        <hr className='underline'/>
        <div className='team'>
            <Member />          
        </div>
      </div>
    )
  }
  
  export default ProjectCard
