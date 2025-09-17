import React, { useState } from 'react';
import { missions } from '../../data/missions';
import './JobOffersPage.scss';

const JobOffersPage = () => {
  const [filteredMissions, setFilteredMissions] = useState(missions);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [showUrgentOnly, setShowUrgentOnly] = useState(false);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    filterMissions(term, selectedType, showUrgentOnly);
  };

  const handleTypeFilter = (type) => {
    setSelectedType(type);
    filterMissions(searchTerm, type, showUrgentOnly);
  };

  const handleUrgentFilter = () => {
    const newShowUrgentOnly = !showUrgentOnly;
    setShowUrgentOnly(newShowUrgentOnly);
    filterMissions(searchTerm, selectedType, newShowUrgentOnly);
  };

  const filterMissions = (search, type, urgentOnly) => {
    let filtered = missions;
    
    if (search) {
      filtered = filtered.filter(mission => 
        mission.title.toLowerCase().includes(search) ||
        mission.company.toLowerCase().includes(search) ||
        mission.description.toLowerCase().includes(search)
      );
    }
    
    if (type) {
      filtered = filtered.filter(mission => mission.type === type);
    }
    
    if (urgentOnly) {
      filtered = filtered.filter(mission => mission.urgent === true);
    }
    
    setFilteredMissions(filtered);
  };

  const missionTypes = [...new Set(missions.map(mission => mission.type))];

  return (
    <div className="job-offers-page">
      <div className="container">
        <div className="page-header">
          <h1>Missions Disponibles</h1>
          <p>Trouvez votre prochaine mission de super-héros</p>
        </div>

        <div className="filters-section">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Rechercher une mission..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
          </div>
          
          <div className="type-filters">
            <button 
              className={`filter-btn ${selectedType === '' && !showUrgentOnly ? 'active' : ''}`}
              onClick={() => {
                setSelectedType('');
                setShowUrgentOnly(false);
                filterMissions(searchTerm, '', false);
              }}
            >
              Toutes
            </button>
            <button 
              className={`filter-btn urgent-filter ${showUrgentOnly ? 'urgent' : ''}`}
              onClick={handleUrgentFilter}
            >
              🚨 Missions Urgentes
            </button>
            {missionTypes.map(type => (
              <button
                key={type}
                className={`filter-btn ${selectedType === type ? 'active' : ''}`}
                onClick={() => handleTypeFilter(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="missions-grid">
          {filteredMissions.map(mission => (
            <div key={mission.id} className={`mission-card`}>
              {mission.urgent && <div className="urgent-badge">URGENT</div>}
              
              <div className="mission-content">
                <div className="mission-header">
                  <h3 className="mission-title">{mission.title}</h3>
                  <div className="mission-meta">
                    <span className="company">{mission.company}</span>
                    <span className="location">📍 {mission.location}</span>
                  </div>
                </div>

                <div className="mission-type">
                  <span className="type-badge">{mission.type}</span>
                  <span className="salary">{mission.salary}</span>
                </div>

                <div className="mission-description">
                  <p>{mission.description}</p>
                </div>

                <div className="mission-requirements">
                  <h4>Compétences requises :</h4>
                  <div className="requirements-list">
                    {mission.requirements.map((req, index) => (
                      <span key={index} className="requirement-tag">{req}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mission-footer">
                <div className="mission-stats">
                  <span className="posted-date">{mission.postedDate}</span>
                </div>
                <button className="apply-btn">
                  Postuler
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredMissions.length === 0 && (
          <div className="no-results">
            <h3>Aucune mission trouvée</h3>
            <p>Essayez de modifier vos critères de recherche</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobOffersPage;