// SurveyForm shows a form to the user to collect inputs
import React, { Component } from 'react';
import SurveyField from './SurveyField';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import FIELDS from './formFields';

class SurveyForm extends Component {
  renderFields() {
    return FIELDS.map(({ label, name, placeholder }) => {
      return (
        <Field
          key={name}
          type="text"
          name={name}
          label={label}
          component={SurveyField}
          placeholder={placeholder}
        />
      );
    });
  }

  render() {
    return (
      <div className="mt-5">
        <h3 className="text-center mb-4 display-5">Create a New Survey</h3>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <div className="mt-4">
            <button className="btn teal right" type="submit">
              Next
              <i className="material-icons right">arrow_forward</i>
            </button>
            <Link to="/surveys" className="btn btn-danger">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  FIELDS.forEach(({ name }) => {
    if (!values[name]) errors[name] = `You must provide ${name}!`;
  });

  return errors;
};

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
