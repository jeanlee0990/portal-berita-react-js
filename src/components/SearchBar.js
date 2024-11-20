import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange = (event) => {
    this.props.onSearch(event.target.value);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control"
        placeholder="Cari berita..."
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchBar;
