import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ showBackButton, onBack }) => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar__logo">
      {showBackButton && (
        <button className="navbar-back-button" onClick={onBack || (() => navigate(-1))}>
          ← Back
        </button>
      )}
      </div>
      <h1 className="navbar-title">Country Info</h1>
        
      
    </nav>
  );
};

export default Navbar;
