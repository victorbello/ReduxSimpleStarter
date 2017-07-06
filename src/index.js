import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

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
    if(this.state.videos.length === 0) return <div>Loading</div>;
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
