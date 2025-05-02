// src/components/SearchBar.jsx
import React from 'react';
import './styles/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  // const [input, setInput] = useState('');
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSearch(input.trim());
  // };

  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search country by name..."
      onChange={(e) => onSearch(e.target.value)}
    />

  //   <form onSubmit={handleSubmit}>
  //   <input
  //     type="text"
  //     placeholder="Search by name, region or subregion"
  //     value={input}
  //     onChange={(e) => setInput(e.target.value)}
  //   />
  //   <button type="submit">Search</button>
  // </form>
  );
};

export default SearchBar;
