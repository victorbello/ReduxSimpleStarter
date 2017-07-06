import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAgWVTXHJsFHufidJKRgdA91iXVOrkumVo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };

    YTSearch({key: API_KEY, term: 'Faraday Future'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
