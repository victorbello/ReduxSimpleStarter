import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

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
    console.log(values);
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

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
