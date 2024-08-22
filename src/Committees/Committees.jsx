import React, { useState, useRef, useEffect } from 'react';
import '../assets/stylesheets/committees.scss';

const Committees = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sliderStyle, setSliderStyle] = useState({});
  const filterContainerRef = useRef(null);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  useEffect(() => {
    if (filterContainerRef.current) {
      const activeButton = filterContainerRef.current.querySelector(`.filter-btn[data-filter="${activeFilter}"]`);
      if (activeButton) {
        const containerRect = filterContainerRef.current.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();
        
        setSliderStyle({
          width: `${buttonRect.width}px`,
          transform: `translateX(${buttonRect.left - containerRect.left}px)`,
          transition: 'transform 0.3s ease, width 0.3s ease',
        });
      }
    }
  }, [activeFilter]);

  const committees = [
    { name: 'Web Committee', description: 'Description for Web Committee', type: 'technical', link: '/web-committee' },
    { name: 'Human Resources', description: 'Description for Human Resources', type: 'non-technical', link: '/human-resources' },
    { name: 'Public Relations', description: 'Description for Public Relations', type: 'non-technical', link: '/public-relations' },
    { name: 'Linux', description: 'Description for Linux', type: 'technical', link: '/linux' },
    { name: 'Blender', description: 'Description for Blender', type: 'technical', link: '/blender' },
    { name: 'Game Committee', description: 'Description for Game Committee', type: 'technical', link: '/game-committee' },
    { name: 'UI/UX', description: 'Description for UI/UX', type: 'technical', link: '/ui-ux' },
    { name: 'Flutter', description: 'Description for Flutter', type: 'technical', link: '/flutter' },
    { name: 'Science & Tech', description: 'Description for Science & Tech', type: 'technical', link: '/science-tech' },
    { name: 'Content Creation', description: 'Description for Content Creation', type: 'non-technical', link: '/content-creation' }
  ];

  const filteredCommittees = activeFilter === 'all' ? committees : committees.filter(c => c.type === activeFilter);

  return (
    <div className="committeesPage">
      <div className="title">
        <h1>Our Committees</h1>
      </div>
      <div className="filter-container" ref={filterContainerRef}>
        <div className="slider" style={sliderStyle}></div>
        <button
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => handleFilterChange('all')}
          data-filter="all"
        >
          All Committees
        </button>
        <button
          className={`filter-btn ${activeFilter === 'technical' ? 'active' : ''}`}
          onClick={() => handleFilterChange('technical')}
          data-filter="technical"
        >
          Technical
        </button>
        <button
          className={`filter-btn ${activeFilter === 'non-technical' ? 'active' : ''}`}
          onClick={() => handleFilterChange('non-technical')}
          data-filter="non-technical"
        >
          Non-Technical
        </button>
      </div>
      <div className="grid">
        {filteredCommittees.map((committee, index) => (
          <a href={committee.link} className="card" key={index}>
            <h2>{committee.name}</h2>
            <p>{committee.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Committees;