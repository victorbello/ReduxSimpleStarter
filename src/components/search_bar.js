import React from 'react';

class SearchBar extends React.Component {
  state = {
    input: ''
  }

  render() {
    return (
      <input onChange={event => console.log(event.target.value)} />
    );
  }
}

export default SearchBar;
