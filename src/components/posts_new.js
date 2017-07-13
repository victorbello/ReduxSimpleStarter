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
      </div>
    );
  };

  renderTagsField = field => {};

  render() {
    return (
      <div>
        <h3>New Post</h3>
        <form>
          <Field label="Title" name="title" component={this.renderField} />
          <Field label="Tags" name="tags" component={this.renderField} />
          <Field label="Post Content" name="content" component={this.renderField} />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
