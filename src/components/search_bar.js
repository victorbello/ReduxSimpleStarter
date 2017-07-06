import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: ''
  }

  render() {
    return (
      <div>
        <input
          onChange={event => this.setState({term: event.target.value})}
          value={this.state.term}
        />
      </div>
    );
  }
}

export default SearchBar;
