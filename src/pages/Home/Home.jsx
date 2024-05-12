import { useState } from 'react'
import './Home.css'
import LeftBlock from '../../components/LeftSidebar/LeftSidebar.jsx'
import RightBlock from '../../components/RIghtSidebar/RightSidebar.jsx'
import TopNav from '../../components/Navbar/Navbar.jsx'
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx'

function Home() {
  return (
    
      <div className='outer-container'>
        <LeftBlock />
        <div className='center common'>
          <TopNav />
          <div className='bottom'>
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
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
          </div>
        </div>
        <RightBlock />
      </div>    
  )
}

export default Home
