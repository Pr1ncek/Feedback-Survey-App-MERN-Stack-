// SurveyNew shows SurveryForm and SurveyFormReview components
import React, { Component } from 'react';
import SurveyForm from './SurveyForm';

class SurveyNew extends Component {
  render() {
    return (
      <div className="w-75 ml-auto mr-auto">
        <SurveyForm />
      </div>
    );
  }
}

export default SurveyNew;
