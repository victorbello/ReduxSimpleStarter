import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: ''
  };

  onInputChange = term => {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  };

  render() {
    return (
      <div className="search-bar">
        <input
          onChange={event => this.onInputChange(event.target.value)}
          value={this.state.term}
        />
      </div>
    );
  }
}

export default SearchBar;
