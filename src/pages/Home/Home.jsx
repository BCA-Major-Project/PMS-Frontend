import React, { useState } from 'react';
import './Home.css';
import LeftBlock from '../../components/LeftSidebar/LeftSidebar';
import RightBlock from '../../components/RIghtSidebar/RightSidebar';
import TopNav from '../../components/Navbar/Navbar';
import Dashboard from '../../components/Dashboard/Dashboard';
import AddProject from '../../components/AddProject/AddProject';

function Home() {
  const [currentComponent, setCurrentComponent] = useState('dashboard'); 

  const handleAddProjectClick = () => {
    setCurrentComponent('addProject');
  };

  const handleDashboardClick = () => {
    setCurrentComponent('dashboard');
  };

  return (
    <div className='outer-container'>
      <LeftBlock
        onAddProjectClick={handleAddProjectClick}
        onDashboardClick={handleDashboardClick}
      />
      <div className='center common'>
        <TopNav />
        <div className='bottom'>
          
          {currentComponent === 'dashboard' ? <Dashboard /> : <AddProject />}
        </div>
      </div>
      <RightBlock />
    </div>
  );
}

export default Home;
