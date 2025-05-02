import React, { useState, useEffect } from "react";
import {
  getAllCountries,
  getCountriesByName,
  getCountriesByRegion,
  // getCountriesBySubRegion,
  // getCountriesByRegionName
} from "../services/CountryService";
import SearchBar from "../components/SearchBar";
import RegionFilter from "../components/RegionFilter";
import CountryList from "../components/CountryList";
import "../App.css";
import Navbar from "../layouts/Navbar";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  // const handleSearch = async (input) => {
  //   setLoading(true);
  //   try {
  //     let result;
  //     try {
  //       // Try by name first
  //       result = await getCountriesByName(input);
  //     } catch {
  //       // Try by region
  //       try {
  //         result = await getCountriesByRegion(input);
  //       } catch {
  //         // Try by subregion
  //         result = await getCountriesBySubRegion(input);
  //       }
  //     }
  //     setCountries(result);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    if (selectedCountry) return;

    const fetchCountries = async () => {
      setLoading(true);

      try {
        if (searchTerm) {
          const result = await getCountriesByName(searchTerm);
          setCountries(result);
          console.log(result);
        } else if (region) {
          const result = await getCountriesByRegion(region);
          setCountries(result);
        } else {
          const result = await getAllCountries();
          setCountries(result);
        }
      } catch (error) {
        console.error("Failed to fetch countries", error);
        setCountries([]);
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, [searchTerm, region, selectedCountry]);

  const handleCountryClick = async (name) => {
    const result = await getCountriesByName(name);
    setSelectedCountry(result[0]);
  };

  const handleBack = () => {
    setSelectedCountry(null);
  };

  return (
    <div>
      <Navbar />
      <div className="app-container">
        <h1>🌍 Country Explorer</h1>
        {selectedCountry ? (
          <CountryDetail country={selectedCountry} onBack={handleBack} />
        ) : (
          <>
            <SearchBar onSearch={setSearchTerm} />
            <RegionFilter onSelectRegion={setRegion} />
            {loading ? (
              <p>Loading countries...</p>
            ) : countries.length > 0 ? (
              <CountryList
                countries={countries}
                onCountryClick={handleCountryClick}
              />
            ) : (
              <p>No countries found.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Country;
