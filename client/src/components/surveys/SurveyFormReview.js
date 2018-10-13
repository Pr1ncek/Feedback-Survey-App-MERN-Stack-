import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FIELDS from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, sendSurvey, history }) => {
  const reviewFields = FIELDS.map(({ name, label }) => {
    return (
      <div key={name} className="mb-5">
        <label className="h4 font-weight-bold">{label}</label>
        <div className="lead display-5">{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div className="mt-5">
      <h3 className="text-center mb-5 display-5">Please Review Your Entries</h3>
      {reviewFields}
      <button
        className="yellow darken-4 btn-flat white-text px-4"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className="teal btn-flat right white-text"
        onClick={e => {
          e.target.disabled = 'true';
          e.target.style.visibility = 'hidden';
          sendSurvey(formValues, history);
        }}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  formValues: state.form.surveyForm.values
});

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyFormReview));
