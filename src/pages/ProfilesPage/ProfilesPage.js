import React, { useState } from 'react';
import { profiles } from '../../data/profiles';
import './ProfilesPage.scss';

const ProfilesPage = () => {
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    if (term === '') {
      setFilteredProfiles(profiles);
    } else {
      const filtered = profiles.filter(profile => 
        profile.name.toLowerCase().includes(term) ||
        profile.speciality.toLowerCase().includes(term) ||
        profile.powers.some(power => power.toLowerCase().includes(term))
      );
      setFilteredProfiles(filtered);
    }
  };

  return (
    <div className="profiles-page">
      <div className="container">
        <div className="page-header">
          <h1>Profils de Super-Héros</h1>
          <p>Découvrez nos héros et leurs capacités extraordinaires</p>
        </div>

        <div className="search-section">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Rechercher un héros..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
          </div>
        </div>

        <div className="profiles-grid">
          {filteredProfiles.map(profile => (
            <div key={profile.id} className="profile-card">
              <div className="profile-content">
                 <div className="profile-header">
                   <div className="profile-avatar">
                     <img src={profile.image} alt={profile.name} className="avatar-image" />
                   </div>
                   <div className="profile-info">
                     <h3 className="profile-name">{profile.name}</h3>
                     <div className="profile-location">📍 {profile.location}</div>
                   </div>
                 </div>

                 <div className="profile-stats">
                   <div className="stat-row">
                     <span className="stat-label">Âge:</span>
                     <span className="stat-value">{profile.age} ans</span>
                   </div>
                   <div className="stat-row">
                     <span className="stat-label">Expérience:</span>
                     <span className="stat-value">{profile.experience}</span>
                   </div>
                   <div className="stat-row">
                     <span className="stat-label">Missions:</span>
                     <span className="stat-value">{profile.missionsCompleted}</span>
                   </div>
                   <div className="stat-row">
                     <span className="stat-label">Note:</span>
                     <span className="stat-value">⭐ {profile.rating}</span>
                   </div>
                 </div>

                <div className="profile-speciality">
                  <span className="speciality-badge">{profile.speciality}</span>
                  <span className="availability-status" data-status={profile.availability.toLowerCase()}>
                    {profile.availability}
                  </span>
                </div>

                <div className="profile-description">
                  <p>{profile.description}</p>
                </div>

                <div className="profile-powers">
                  <h4>Pouvoirs :</h4>
                  <div className="powers-list">
                    {profile.powers.map((power, index) => (
                      <span key={index} className="power-tag">{power}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="profile-footer">
                <div className="profile-rate">
                  <span className="rate-label">Tarif</span>
                  <span className="rate-value">{profile.hourlyRate}</span>
                </div>
                <button className="contact-btn">
                  Contacter
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProfiles.length === 0 && (
          <div className="no-results">
            <h3>Aucun profil trouvé</h3>
            <p>Essayez de modifier vos critères de recherche</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilesPage;