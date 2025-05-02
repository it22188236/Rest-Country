import React from 'react';
import './styles/CountryList.css';
import CountryCard from './CountryCard';

const CountryList = ({ countries, onCountryClick }) => {
  const sortedCountries = [...countries].sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );

  return (
    <div className="country-list">
      {sortedCountries.map((country) => (
        <CountryCard key={country.cca3} country={country} onClick={onCountryClick}/>
      ))}
    </div>
  );
};

export default CountryList;

