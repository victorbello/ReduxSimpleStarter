import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends React.Component {
  renderField = ({ meta: { touched, error }, label, input }) => {
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label>
          {label}
        </label>
        <input className="form-control" type="text" {...input} />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  };

  onSubmit = values => {
    this.props.createPost(values);
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <h3>New Post</h3>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            label="Title for the Post"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field
            label="Post Content"
            name="content"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Enter a title!';
  }
  if (!values.categories) {
    errors.categories = 'Enter a category!';
  }
  if (!values.content) {
    errors.content = 'Enter content!';
  }
  return errors;
};

const withRedux = connect(null, { createPost })(PostsNew);

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(withRedux);
