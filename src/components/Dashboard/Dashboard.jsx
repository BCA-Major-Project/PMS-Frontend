import './Dashboard.css'
import ProjectCard from '../ProjectCard/ProjectCard'

function Dashboard() {
    return (

            <>
                <div className='filter'>
                <p className='filterBy'>Filter by:</p>
                <p className='options highlight'>all</p>
                <p className='options highlight'>mine</p>
                <p className='options highlight'>development</p>
                <p className='options highlight'>design</p>
                <p className='options highlight'>marketing</p>
                <p className='highlight'>sales</p>
                </div>
                <div className='content'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard /><ProjectCard /><ProjectCard /><ProjectCard /><ProjectCard /><ProjectCard /><ProjectCard /><ProjectCard />
                </div>    
            </>         
    )
  }
  
  export default Dashboard