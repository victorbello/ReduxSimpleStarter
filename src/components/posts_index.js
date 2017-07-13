import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props.posts);
    return (
      <div>
        Posts Index
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
