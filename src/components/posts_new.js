import React from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends React.Component {
  renderField = field => {
    return (
      <div className="form-group">
        <label>
          {field.label}
        </label>
        <input className="form-control" type="text" {...field.input} />
        {field.meta.error}
      </div>
    );
  };

  onSubmit = values => {
    console.log(values);
  }

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
