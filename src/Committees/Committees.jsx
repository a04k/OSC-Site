import { useState, useRef, useEffect } from 'react';
import '../assets/stylesheets/committees.scss';

const Committees = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sliderStyle, setSliderStyle] = useState({});
  const filterRef = useRef(null);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  useEffect(() => {
    if (filterRef.current) {
      const activeButton = filterRef.current.querySelector(`.filter-btn[data-filter="${activeFilter}"]`);
      if (activeButton) {
        setSliderStyle({
          width: activeButton.offsetWidth + 'px',
          transform: `translateX(${activeButton.offsetLeft}px)`,
        });
      }
    }
  }, [activeFilter]);

  const committees = [
    { name: 'Web Committee', description: 'Description for Web Committee', type: 'tech', link: '/committees/web-committee' },
    { name: 'Human Resources', description: 'Description for Human Resources', type: 'non-tech', link: '/committees/human-resources' },
    { name: 'Public Relations', description: 'Description for Public Relations', type: 'non-tech', link: '/committees/public-relations' },
    { name: 'Linux', description: 'Description for Linux', type: 'tech', link: '/committees/linux' },
    { name: 'Blender', description: 'Description for Blender', type: 'tech', link: '/committees/blender' },
    { name: 'Game Committee', description: 'Description for Game Committee', type: 'tech', link: '/committees/game-committee' },
    { name: 'UI/UX', description: 'Description for UI/UX', type: 'creative', link: '/committees/ui-ux' },
    { name: 'Flutter', description: 'Description for Flutter', type: 'tech', link: '/committees/flutter' },
    { name: 'Science & Tech', description: 'Description for Science & Tech', type: 'tech', link: '/committees/science-tech' },
    { name: 'Content Creation', description: 'Description for Content Creation', type: 'creative', link: '/committees/content-creation' }
  ];

  const filteredCommittees = activeFilter === 'all' ? committees : committees.filter(c => c.type === activeFilter);

  return (
    <div className="committeesPage">
      <div className="title">
        <h1>Our Committees</h1>
      </div>
      <div className="filter-container" ref={filterRef}>
        <div className="slider" style={sliderStyle}></div>
        <button
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => handleFilterChange('all')}
          data-filter="all"
        >
          All Committees
        </button>
        <button
          className={`filter-btn ${activeFilter === 'tech' ? 'active' : ''}`}
          onClick={() => handleFilterChange('tech')}
          data-filter="tech"
        >
          Technical
        </button>
        <button
          className={`filter-btn ${activeFilter === 'non-tech' ? 'active' : ''}`}
          onClick={() => handleFilterChange('non-tech')}
          data-filter="non-tech"
        >
          Non-tech
        </button>
        <button
          className={`filter-btn ${activeFilter === 'creative' ? 'active' : ''}`}
          onClick={() => handleFilterChange('creative')}
          data-filter="creative"
        >
          Creative
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