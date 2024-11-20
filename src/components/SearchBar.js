import React from 'react';

const SearchBar = ({ onSearch }) => (
  <input
    type="text"
    className="form-control"
    placeholder="Cari berita..."
    onChange={(e) => onSearch(e.target.value)}
  />
);

export default SearchBar;
