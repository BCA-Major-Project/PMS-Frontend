import { useState } from 'react'
import './Home.css'
import LeftBlock from '../../components/LeftSidebar/LeftSidebar.jsx'
import RightBlock from '../../components/RIghtSidebar/RightSidebar.jsx'
import TopNav from '../../components/Navbar/Navbar.jsx'
import Dashboard from '../../components/Dashboard/Dashboard.jsx'
import AddProject from '../../components/AddProject/AddProject.jsx'

function Home() {
  return (
    
      <div className='outer-container'>
        <LeftBlock />
        <div className='center common'>
          <TopNav />
          <div className='bottom'>
            <Dashboard />
          </div>
        </div>
        <RightBlock />
      </div>    
  )
}

export default Home
