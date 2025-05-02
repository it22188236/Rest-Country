const BASE_URL = "https://restcountries.com/v3.1";

export const getAllCountries = async () => {
  const res = await fetch(`${BASE_URL}/all`);
  return res.json();
};

export const getCountriesByName = async (name) => {
  const res = await fetch(`${BASE_URL}/name/${name}`);
  return res.json();
};

export const getCountriesByRegion = async (region) => {
  const res = await fetch(`${BASE_URL}/region/${region}`);
  return res.json();
};

export const getCountriesBySubRegion = async (subRegion) => {
  const allCountries = await getAllCountries();
  return allCountries.filter(
    (country) => country.subregion?.toLowerCase() === subRegion.toLowerCase()
  );
};

export const getCountriesByRegionName = async (region) => {
  const allCountries = await getAllCountries();
  return allCountries.filter(
    (country) => country.region?.toLowerCase() === region.toLowerCase()
  );
};

export const getCountryByCode = async (code) => {
  const res = await fetch(`${BASE_URL}/alpha/${code}`);
  return res.json();
};

export const getCountryFullName = async (name) => {
  const res = await fetch(`${BASE_URL}/name/${name}?fullText=true`);
  return res.json();
};
