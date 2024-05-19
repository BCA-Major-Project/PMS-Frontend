import React, { useState } from 'react';
import './Dashboard.css';
import ProjectCard from '../ProjectCard/ProjectCard';

function Dashboard() {
    const [filter, setFilter] = useState('all');

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    return (
        <>
            <div className='filter'>
                <p className='filterBy'>Filter by:</p>
                <p className={`options ${filter === 'all' ? 'highlight' : ''}`} onClick={() => handleFilterChange('all')}>all</p>
                <p className={`options ${filter === 'mine' ? 'highlight' : ''}`} onClick={() => handleFilterChange('mine')}>mine</p>
                <p className={`options ${filter === 'development' ? 'highlight' : ''}`} onClick={() => handleFilterChange('development')}>development</p>
                <p className={`options ${filter === 'design' ? 'highlight' : ''}`} onClick={() => handleFilterChange('design')}>design</p>
                <p className={`options ${filter === 'marketing' ? 'highlight' : ''}`} onClick={() => handleFilterChange('marketing')}>marketing</p>
                <p className={`options ${filter === 'sales' ? 'highlight' : ''}`} onClick={() => handleFilterChange('sales')}>sales</p>
            </div>
            <div className='content'>
                <ProjectCard filter={filter} />
            </div>
        </>
    );
}

export default Dashboard;
