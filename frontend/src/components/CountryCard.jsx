import React from 'react';
import './styles/CountryCard.css';
import {useNavigate} from 'react-router-dom'


const CountryCard = ({ country}) => {
  const { name, region, flags } = country;
  const navigate = useNavigate();

  return (
    <div className="country-card" onClick={()=>navigate(`/${encodeURIComponent(name.common)}`)}>
      <img src={flags.png} alt={`Flag of ${name.common}`} />
      <h3>{name.common}</h3>
      <p><strong>Region:</strong> {region}</p>
    </div>
  );
};

export default CountryCard;
