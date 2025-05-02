// src/components/RegionFilter.jsx
import React from 'react';
import './styles/RegionFilter.css';

const RegionFilter = ({ onSelectRegion }) => {
  return (
    <select className="region-filter" onChange={(e) => onSelectRegion(e.target.value)}>
      <option value="">All Regions</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default RegionFilter;
