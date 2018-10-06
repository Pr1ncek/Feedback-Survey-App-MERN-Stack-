// SurveyForm shows a form to the user to collect inputs
import React, { Component } from 'react';
import SurveyField from './SurveyField';
import { reduxForm, Field } from 'redux-form';

class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        <Field type="text" name="title" component={SurveyField} />
      </div>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button className="btn btn-primary btn-block" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
