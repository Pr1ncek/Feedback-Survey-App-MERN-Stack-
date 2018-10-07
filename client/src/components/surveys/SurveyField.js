// SurveyField contains logic to render a single label and text input
import React from 'react';

export default ({ input, label, placeholder, meta: { error, touched } }) => {
  return (
    <div className="mt-4">
      <label className="h4 font-weight-light">{label}</label>
      <input {...input} placeholder={placeholder} />
      <div className="text-danger">{touched && error}</div>
    </div>
  );
};
