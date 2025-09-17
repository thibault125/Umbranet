import React from 'react-dom';
import { Link } from 'react-router-dom'; // ⬅️ Ajout de l'import de Link
import './HomePage.css';
import umbranetLogo from './umbranet_logo.jpg'

const HomePage = () => {
  return (
    <div className="main-layout">
      {/* Colonne de la barre latérale (Actualité de l'Ombre) */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <img src={umbranetLogo} alt="Umbranet Logo" className="umbranet-logo-sidebar" />
          <h2 className="sidebar-title">ACTUALITÉ DE L'OMBRE</h2>
          <nav className="news-categories">
            <a href="#vole" className="category-link">VOLE</a>
            <a href="#alliance" className="category-link">ALLIANCE</a>
            <a href="#culture" className="category-link">CULTURE</a>
            <a href="#cyber" className="category-link">CYBER</a>
          </nav>
        </div>

        <div className="news-section">
          <h3>ACTUALITÉ À LA UNE</h3>
          <div className="news-item">
            <h4>LE JOKER ET HARLEY QUINN ORGANISENT UN CASSE SPECTACULAIRE À METROPOLIS, ÉCHAPPANT DE JUSTESSE À SUPERMAN.</h4>
            <p>IL Y 6 H | 1K LECTEURS</p>
          </div>
          <div className="news-item">
            <h4>CATWOMAN S'ALLIE À LUPIN III POUR DÉROBER UNE COLLECTION DE DIAMANTS À PARIS</h4>
            <p>IL Y 2 J | 3K LECTEURS</p>
          </div>
          <div className="news-item">
            <h4>GANONDORF SUBTILISE LA MASTER SWORD DANS LE TEMPLE D'HYRULE, LAISSANT LINK DÉSARMÉ.</h4>
            <p>IL Y 1 H | 10K LECTEURS</p>
          </div>
          <div className="news-item">
            <h4>BOWSER KIDNAPPE À NOUVEAU LA PRINCESSE PEACH, MAIS CETTE FOIS AVEC L'AIDE DU PINGOUIN DE GOTHAM.</h4>
            <p>IL Y 10 J | 360 LECTEURS</p>
          </div>
        </div>

        <div className="partnership-section">
          <h3>PARTENARIAT</h3>
          <div className="partnership-card">
            <div className="partnership-text">
              <h4>PARTENARIAT OFFICIEL HEROICMATCH</h4>
              <p>LÀ OÙ LES ÉTINCELLES DU BIEN ALLUMENT L'ESPOIR</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Colonne du contenu principal (votre page d'accueil existante) */}
      <div className="home-content">
        <section className="hero-section">
          <h1>Bienvenue sur Umbranet</h1>
          <p>Le réseau social de l'élite héroïque.</p>
          
          {/* ⬅️ Remplacement de <button> par <Link> */}
          <Link to="/missions" className="cta-button">
            Combattez la conspiration
          </Link>
          
        </section>

        <section className="villain-profiles-section">
          <h2>Recrues disponibles</h2>
          <div className="profile-list">
            <div className="profile-card">
              <h3>L'Architecte</h3>
              <p>Spécialiste en génie robotique.</p>
            </div>
            <div className="profile-card">
              <h3>Cypher le Codeur</h3>
              <p>Expert en cyber-espionnage et piratage de systèmes de sécurité.</p>
            </div>
            <div className="profile-card">
              <h3>Dr. Harmonia</h3>
              <p>Maîtrise des remèdes et de la chimie expérimentale.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;