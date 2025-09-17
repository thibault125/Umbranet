import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import JobOffersPage from './pages/JobOffersPage/JobOffersPage';
import ProfilesPage from './pages/ProfilesPage/ProfilesPage';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/missions" element={<JobOffersPage />} />
          <Route path="/profils" element={<ProfilesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;