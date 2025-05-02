// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { getCountriesByName } from "../services/CountryService";
// import Navbar from "../layouts/Navbar";
// import "../App.css";

// const CountryDetails = () => {
//   const [country, setCountry] = useState({
//     name: "",
//     official: "",
//     flagImg: "",
//     population: 0,
//     region: "",
//     subregion: "",
//     capital: "",
//     independent: "",
//     landlocked: "",
//     maps: [],
//     tld: "",
//     currencies: {},
//     languages: [],
//     borders: [],
//   });

//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const { countryName } = useParams();

//   useEffect(() => {
//     const fetchCountry = async () => {
//       setLoading(true);
//       try {
//         const result = await getCountriesByName(countryName);
//         setCountry(result[0]);
//       } catch (error) {
//         console.error("Country not found", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCountry();
//   }, [countryName]);

//   if (loading) return <p>Loading...</p>;
//   if (!country) return <p>Country not found</p>;

//   const languages = Object.values(country.languages || {});
//   const currencies = Object.values(country.currencies || {});
//   const borders = country.borders || [];
//   const timeZones = country.timezones || [];
//   const idd = Object.values(country.idd || {});

//   return (
//     <div className="country-details-container">
     
//      <Navbar/>
//      <button className="country-back-button" onClick={() => navigate("/")}>
//         ← Back
//       </button>
      

//       <img
//         className="country-flag"
//         src={country.flags.png}
//         alt={`Flag of ${country.name.common}`}
//       />
//       <h2 className="country-name">{country.name.common}</h2>

//       <div className="country-info">
//         <p>
//           <strong>Official Name:</strong> {country.name.official}
//         </p>
//         <p>
//           <strong>Region:</strong> {country.region}
//         </p>
//         <p>
//           <strong>Sub-Region:</strong> {country.subregion}
//         </p>
//         <p>
//           <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
//         </p>
//         <p>
//           <strong>Population:</strong> {country.population.toLocaleString()}
//         </p>
//         <p>
//           <strong>Time Zones:</strong> {timeZones.join(", ")}
//         </p>
//         <p>
//           <strong>UN Member:</strong> {country.unMember ? "Yes" : "No"}
//         </p>
//         <p>
//           <strong>Languages:</strong> {languages.join(", ")}
//         </p>
//         <p>
//           <strong>Currency:</strong>{" "}
//           {currencies.map((c) => `${c.name} (${c.symbol})`).join(", ")}
//         </p>
//         <p>
//           <strong>IDD:</strong> {idd.join(" ")}
//         </p>
//         <p>
//           <strong>Borders:</strong> {borders.join(", ") || "None"}
//         </p>
//         <p>
//           <strong>Independent:</strong> {country.independent ? "Yes" : "No"}
//         </p>
//         <p>
//           <strong>Land Locked:</strong> {country.landlocked ? "Yes" : "No"}
//         </p>
//         <p>
//           <strong>Top Level Domain:</strong> {country.tld?.[0] || "N/A"}
//         </p>
//         <p>
//           <strong>Show on Google Maps:</strong>{" "}
//           <a
//             className="country-link"
//             href={country.maps.googleMaps}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             View on Google Maps
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default CountryDetails;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCountriesByName } from "../services/CountryService";
import Navbar from "../layouts/Navbar";
import "../App.css"; // new stylesheet

const CountryDetails = () => {
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { countryName } = useParams();

  useEffect(() => {
    const fetchCountry = async () => {
      setLoading(true);
      try {
        const result = await getCountriesByName(countryName);
        setCountry(result[0]);
      } catch (error) {
        console.error("Country not found", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCountry();
  }, [countryName]);

  if (loading) return <p>Loading...</p>;
  if (!country) return <p>Country not found</p>;

  const languages = Object.values(country.languages || {});
  const currencies = Object.values(country.currencies || {});
  const borders = country.borders || [];
  const timeZones = country.timezones || [];
  const idd = Object.values(country.idd || {});
  const capital = country.capital?.[0] || "N/A";

  return (
    <div className="country-details-wrapper">
      <Navbar showBackButton={true} onBack={() => navigate("/")}/>
{/* 
      <button className="back-button" onClick={() => navigate("/")}>← Back</button> */}

      <div className="country-header">
        <img className="country-flag" src={country.flags?.png} alt={`Flag of ${country.name?.common}`} />
        <h2 className="country-title">{country.name?.common}</h2>
      </div>

      <div className="details-grid">
        <div className="detail-item"><strong>Official Name:</strong> {country.name?.official}</div>
        <div className="detail-item"><strong>Region:</strong> {country.region}</div>
        <div className="detail-item"><strong>Sub-Region:</strong> {country.subregion}</div>
        <div className="detail-item"><strong>Capital:</strong> {capital}</div>
        <div className="detail-item"><strong>Population:</strong> {country.population?.toLocaleString()}</div>
        <div className="detail-item"><strong>Time Zones:</strong> {timeZones.join(", ")}</div>
        <div className="detail-item"><strong>UN Member:</strong> {country.unMember ? "Yes" : "No"}</div>
        <div className="detail-item"><strong>Languages:</strong> {languages.join(", ")}</div>
        <div className="detail-item">
          <strong>Currency:</strong>{" "}
          {currencies.map(c => `${c.name} (${c.symbol})`).join(", ")}
        </div>
        <div className="detail-item"><strong>IDD:</strong> {idd.join(" ")}</div>
        <div className="detail-item"><strong>Borders:</strong> {borders.length ? borders.join(", ") : "None"}</div>
        <div className="detail-item"><strong>Independent:</strong> {country.independent ? "Yes" : "No"}</div>
        <div className="detail-item"><strong>Land Locked:</strong> {country.landlocked ? "Yes" : "No"}</div>
        <div className="detail-item"><strong>Top Level Domain:</strong> {country.tld?.[0] || "N/A"}</div>
        <div className="detail-item">
          <strong>Show on Google Map:</strong>{" "}
          <a className="map-link" href={country.maps?.googleMaps} target="_blank" rel="noopener noreferrer">
            View on Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
