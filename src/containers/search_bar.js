import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form className="input-group">
        <input placeholder="Search for a city..." />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

export default SearchBar;
